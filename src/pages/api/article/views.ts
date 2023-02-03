import type { NextApiHandler } from 'next';

import { gqlFetcher } from 'mod/lib/graphql_fetcher';
import { getInternalUrl } from 'mod/lib/utils';

const handler: NextApiHandler = async (req, res) => {
  const { searchParams } = new URL(getInternalUrl(req.url));

  const slug = searchParams.get('slug');

  if (slug && slug.length !== 0) {
    const param = `"${encodeURIComponent(slug)}"`;

    const data = await gqlFetcher(
      `{ article(where: {slug: ${param}}, stage: PUBLISHED) { views } }`
    );

    if (req.method === 'POST') {
      const views = data['article']['views'] + 1;

      await gqlFetcher(`
        mutation {
          updateArticle(where: {slug: ${param}}, data: {views: ${views}}) {
            views
          }
        }
      `);

      await gqlFetcher(`
        mutation {
          publishArticle(where: {slug: ${param}}, to: PUBLISHED) {
            views
          }
        }
      `);

      return res.send('OK');
    }

    return res.status(200).json(data);
  }

  return res.status(400).json({ message: 'Not Found' });
};

export default handler;
