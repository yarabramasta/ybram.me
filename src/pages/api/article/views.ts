import type { NextApiHandler } from 'next';

import gqlFetcher from 'mod/lib/graphql_fetcher';

const handler: NextApiHandler = async (req, res) => {
  const { searchParams } = new URL(
    (process.env.SITE_URL ?? process.env.NODE_ENV === 'production'
      ? 'https://ybram.me'
      : 'localhost:3000') + req.url
  );

  const slug = searchParams.get('slug');

  if (slug && slug.length !== 0) {
    const data = await gqlFetcher(`article(where: {slug: "${encodeURIComponent(
      slug
    )}"}, stage: PUBLISHED) {
      views
    }`);

    return res.status(200).json(data);
  }

  return res.status(400).json({ message: 'Not Found' });
};

export default handler;
