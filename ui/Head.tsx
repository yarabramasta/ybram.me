import NextHead from 'next/head';
import type { FC } from 'react';

import { getPageMetadata, type MetadataConfig } from '@/utils';

const Head: FC<{ config?: MetadataConfig }> = ({ config }) => {
  const metadata = getPageMetadata(config);

  return (
    <NextHead>
      <title>{metadata.title}</title>
      {metadata.meta.map((v) => (
        <meta key={v.name} {...v} />
      ))}
      {metadata.links.map((v) => (
        <link key={v.rel} {...v} />
      ))}
    </NextHead>
  );
};

export default Head;
