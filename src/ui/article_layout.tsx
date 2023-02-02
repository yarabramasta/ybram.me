import format from 'date-fns/format';
import { NextSeo } from 'next-seo';

import { articleSeoConfig } from 'mod/lib/next-seo.config';
import Container from 'mod/ui/container';
import MDX from 'mod/ui/mdx';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

const ArticleLayout: FC<PropsWithChildren<{ data: any }>> = ({
  data,
  children
}) => {
  return (
    <>
      <NextSeo {...articleSeoConfig(data, false)} />
      <Container>
        <div
          className={`flex flex-col md:flex-row gap-text ${
            children ? 'pb-normal' : 'pb-section'
          } md:items-baseline md:justify-between w-full`}
        >
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
        <div className="flex flex-col items-center justify-start py-section w-full gap-component">
          <div className="flex flex-col gap-text items-center justify-center w-full">
            <div className="rounded-full w-[40px] h-[40px] overflow-hidden bg-white20 relative">
              <Image
                src={data['author']['avatar']['url']}
                alt={data['author']['name']}
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-base text-white85 font-medium text-center">
              Written by {data['author']['name']}
            </h3>
          </div>
          <p className="text-sm text-white60 whitespace-pre-wrap text-center leading-relaxed">
            Last modified on <br />
            {format(new Date(data['updatedAt']), 'MMM dd, yyyy')} at{' '}
            {format(new Date(data['updatedAt']), 'mm:ss aa')}.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ArticleLayout;
