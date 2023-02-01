import useSWR from 'swr';

import { getInternalUrl } from './utils';

export const apiFetcher = async (
  path: string,
  opt: { internal: boolean; external?: string } = { internal: true }
) => {
  const url = opt.internal
    ? `${getInternalUrl(`/api${path}`).toString()}`
    : opt.external;

  return fetch(url).then(res => res.json());
};

export const useAPI = <T>(
  path: string,
  opt: { internal?: boolean; external?: string; fallback?: any }
) => {
  return useSWR<T>(
    path,
    apiFetcher.bind(apiFetcher, [
      path,
      { internal: opt.internal ?? true, external: opt.external }
    ]),
    {
      fallbackData: opt.fallback,
      refreshInterval: 10000 // 10 seconds
    }
  );
};
