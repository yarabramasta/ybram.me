import { gql, GraphQLClient } from 'graphql-request';

const hygraph = (cdn: boolean) =>
  new GraphQLClient(
    cdn
      ? <string>process.env.GRAPHCMS_CONTENT_API_CDN
      : <string>process.env.GRAPHCMS_CONTENT_API,
    {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_PERMANENT_AUTH_TOKEN}`
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

export const gqlFetcher = (
  query: string,
  cdn = process.env.NODE_ENV === 'production'
) => {
  return hygraph(cdn).request(
    gql`
      ${query}
    `
  );
};
