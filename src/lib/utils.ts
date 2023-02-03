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

export const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};
