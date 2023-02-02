import format from 'date-fns/format';
import { NextSeo } from 'next-seo';

import Container from 'mod/components/container';
import MDX from 'mod/components/mdx';
import { articleSeoConfig } from 'mod/lib/next-seo.config';
import { FC, PropsWithChildren } from 'react';

const ArticleLayout: FC<PropsWithChildren<{ data: any }>> = ({
  data,
  children
}) => {
  return (
    <>
      <NextSeo {...articleSeoConfig(data, false)} />
      <Container>
        <div className="flex flex-col md:flex-row gap-text mb-normal md:items-baseline md:justify-between w-full">
          <h1 className="text-xl text-white font-bold flex-grow">
            {data['title']}
          </h1>
          <p className="text-sm text-white60">
            {format(new Date(data['publishedAt']), 'MMM dd, yyyy')} &bull;{' '}
            {data['readtime']} &bull; {String(data['views'])} views
          </p>
        </div>
        {children}
        <MDX body={data['body']} />
        <div className="flex flex-col items-center justify-start mt-20 w-full gap-component">
          <p className="text-sm text-white60 whitespace-pre-wrap text-center">
            Last modified on{' '}
            {format(new Date(data['updatedAt']), 'MMM dd, yyyy')} at{' '}
            {format(new Date(data['updatedAt']), 'mm:ss aa')}.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ArticleLayout;
