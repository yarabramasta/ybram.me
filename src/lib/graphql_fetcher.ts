import { gql, GraphQLClient } from 'graphql-request';
import useSWR from 'swr';

const hygraph = (cdn: boolean) =>
  new GraphQLClient(
    cdn
      ? <string>process.env.GRAPHCMS_CONTENT_API_CDN
      : <string>process.env.GRAPHCMS_CONTENT_API,
    {
      headers: {
        Authorization: <string>process.env.GRAPHCMS_PERMANENT_AUTH_TOKEN
      }
    }
  );

export const GQL_DATA_ARTICLE = `{
  id
  title
  slug
  description
  excerpt
  views
  body
  author {
    name
    avatar {
      url
    }
  }
  publishedAt
  updatedAt
}`;

export const gqlFetcher = (query: string, cdn = false) => {
  return hygraph(cdn).request(
    gql`
      ${query}
    `
  );
};

export const useGraphQL = <T>(
  query: string,
  opt: { fallback?: any; cdn: boolean } = {
    cdn: process.env.NODE_ENV === 'production'
  }
) => {
  return useSWR<T>(query, gqlFetcher.bind(gqlFetcher, [query, opt.cdn]), {
    fallbackData: opt.fallback,
    refreshInterval: 10000 // 10 seconds
  });
};
