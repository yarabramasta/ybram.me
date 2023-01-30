import { gql, GraphQLClient, request } from 'graphql-request';
import useSWR from 'swr';

const endpoint = <string>process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL;
const authorizationHeader = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN}`
};

export const gqlClient = new GraphQLClient(endpoint, {
  headers: authorizationHeader
});

const fetcher = (query: string) => {
  return request(
    endpoint,
    gql`
      ${query}
    `,
    null,
    authorizationHeader
  );
};

export const useGraphQL = <T>(query: string, fallback?: any) => {
  return useSWR<T>(query, fetcher, {
    fallbackData: fallback,
    refreshInterval: 30000 // 30 seconds
  });
};

export default fetcher;
