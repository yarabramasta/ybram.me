import NextHead from 'next/head';
import type { FC } from 'react';

import { getPageMetadata, type MetadataConfig } from '@/utils';

const Head: FC<{ config?: MetadataConfig }> = ({ config }) => {
  const metadata = getPageMetadata(config);

  return (
    <NextHead>
      <title>{metadata.title}</title>
      {metadata.meta.map((v, i) => (
        <meta key={v.name + i} {...v} />
      ))}
      {metadata.links.map((v, i) => (
        <link key={v.rel + i} {...v} />
      ))}
    </NextHead>
  );
};

export default Head;
