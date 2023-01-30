import { useGraphQL } from 'mod/lib/graphql_fetcher';

import Article, {
  type FeaturedArticle,
  type IArticleJson
} from './article_model';
import { FEATURED_ARTICLES_QUERY } from './constants';

export function useFeaturedArticles(fallback: FeaturedArticle[] = []) {
  const { data, error, isLoading } = useGraphQL<{
    allArticle: IArticleJson[];
  }>(FEATURED_ARTICLES_QUERY, fallback);

  return {
    articles: (data?.allArticle ?? []).map(Article.toFeaturedArticle),
    error,
    isLoading
  };
}
