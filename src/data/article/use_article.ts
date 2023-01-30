import { useGraphQL } from '@/lib/graphql_fetcher';

import Article, { type IArticleJSON } from './article_model';

export function useFeaturedArticles(fallback?: Article[]) {
  const { data, error, isLoading } = useGraphQL<{
    allArticle: IArticleJSON[];
  }>(
    `query {
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
  `,
    fallback
  );

  const articles = (data?.allArticle ?? <IArticleJSON[]>[]).map(
    Article.fromJson
  );

  return { articles, error, isLoading };
}
