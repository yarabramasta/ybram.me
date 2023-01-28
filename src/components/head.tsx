import { DefaultSeo } from 'next-seo';

import defaultSeoConfig from '@/lib/next-seo.config';

const Head = ({ title }: { title?: string }) => {
  return (
    <>
      <DefaultSeo title={title} {...defaultSeoConfig} />
    </>
  );
};

export default Head;
