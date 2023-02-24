export default function getAbsoluteUrl(path: string) {
  const base =
    process.env.SITE_URL ?? process.env.NODE_ENV === 'production'
      ? 'https://ybram.me'
      : '';

  return base + (path.startsWith('/') ? path : `/${path}`);
}
