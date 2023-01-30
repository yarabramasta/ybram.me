import { gqlClient } from 'mod/lib/graphql_fetcher';

import Article, { type IArticleJson } from './article_model';
import { FEATURED_ARTICLES_QUERY } from './constants';

export async function getFeaturedArticles() {
  const data = await gqlClient.request<{
    allArticle: IArticleJson[];
  }>(FEATURED_ARTICLES_QUERY);

  return (data?.allArticle ?? []).map(Article.toFeaturedArticle);
}
