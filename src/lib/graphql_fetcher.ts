import { gql, request } from 'graphql-request';
import useSWR from 'swr';

const fetcher = (query: string) => {
  return request(
    <string>process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL,
    gql`
      ${query}
    `,
    null,
    { Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN}` }
  );
};

export const useGraphQL = <T>(query: string) => useSWR<T>(query, fetcher);

export default fetcher;
