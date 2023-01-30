import { gqlClient } from '@/lib/graphql_fetcher';

import Article, { IArticleJSON } from './article_model';

export async function getFeaturedArticles() {
  const res = await gqlClient.request<{
    allArticle: IArticleJSON[];
  }>(`query {
        allArticle(
          where: {
            featured: { eq: true },
            _: { is_draft: false }
          },
          limit: 2,
          sort: { _createdAt: DESC }
        ) {
          _id
          slug { current }
          title
          featured
          author { name, default, fallback }
          body
          _createdAt
        }
      }
    `);

  const articles = (res.allArticle ?? <IArticleJSON[]>[]).map(Article.fromJson);

  return articles;
}
