import type { NextApiHandler } from 'next';

import { gqlFetcher, GQL_DATA_ARTICLE } from 'mod/lib/graphql_fetcher';
import { getInternalUrl } from 'mod/lib/utils';

const handler: NextApiHandler = async (req, res) => {
  const { searchParams } = new URL(getInternalUrl(req.url));

  const slug = searchParams.get('slug');

  if (slug && slug.length !== 0) {
    const data = await gqlFetcher(
      `{ article(where: {slug: "${encodeURIComponent(
        slug
      )}"}, stage: PUBLISHED) ${GQL_DATA_ARTICLE} }`
    );

    return res
      .status(data['article'] ? 200 : 404)
      .json(data['article'] ? data : { message: 'Not Found' });
  }

  const data = await gqlFetcher(
    `{ articles(stage: PUBLISHED, orderBy: publishedAt_DESC, where: {exclude: false}) ${GQL_DATA_ARTICLE} }`
  );

  return res.status(200).json(data);
};

export default handler;
