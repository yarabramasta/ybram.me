import { getInternalUrl } from './utils';

export const apiFetcher = async (path: string) => {
  return fetch(getInternalUrl(`/api${path}`).toString()).then(res =>
    res.json()
  );
};
