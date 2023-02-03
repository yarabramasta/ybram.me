export const apiFetcher = async (path: string) => {
  return fetch(`/api${path}`).then(res => res.json());
};
