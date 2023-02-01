export const getInternalUrl = (path: string) => {
  return new URL(
    (process.env.SITE_URL ?? process.env.NODE_ENV === 'production'
      ? 'https://ybram.me'
      : 'http://localhost:3000') + path
  );
};

export const getOGImageUrl = (data: any) => {
  const metadata = {
    title: data['title'],
    views: data['views'],
    readtime: data['readtime'],
    date: data['publishedAt']
  };

  const q = Object.entries(metadata)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');

  const path = `/api/og?${q}`;

  return getInternalUrl(path).toString();
};
