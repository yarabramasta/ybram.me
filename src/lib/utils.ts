export const getInternalUrl = (path: string) => {
  return new URL(
    (process.env.SITE_URL ?? process.env.NODE_ENV === 'production'
      ? 'https://ybram.me'
      : 'http://localhost:3000') + path
  );
};
