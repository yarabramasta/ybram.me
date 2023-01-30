import { gql, GraphQLClient } from 'graphql-request';
import useSWR from 'swr';

export const gqlClient = new GraphQLClient('', {
  headers: {
    Authorization: ''
  }
});

const fetcher = (query: string) => {
  return gqlClient.request(
    gql`
      ${query}
    `
  );
};

export const useGraphQL = <T>(query: string, fallback?: any) => {
  return useSWR<T>(query, fetcher, {
    fallbackData: fallback,
    refreshInterval: 10000 // 10 seconds
  });
};

export default fetcher;
