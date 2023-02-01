import format from 'date-fns/format';
import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import Container from 'mod/components/container';
import MDX from 'mod/components/mdx';
import { gqlFetcher, GQL_DATA_ARTICLE } from 'mod/lib/graphql_fetcher';
import { articleSeoConfig } from 'mod/lib/next-seo.config';

const About: NextPage = ({ data }: any) => {
  return (
    <>
      <NextSeo {...articleSeoConfig(data, false)} />
      <Container>
        <div className="flex flex-col md:flex-row gap-text mb-normal md:items-baseline md:justify-between w-full">
          <h1 className="text-xl text-white font-bold flex-grow">
            {data['title']}
          </h1>
          <p className="text-sm text-white60">
            {format(new Date(data['publishedAt']), 'MMMM dd, yyyy')} &bull;{' '}
            {data['readtime']} &bull; {String(data['views'])} views
          </p>
        </div>
        <MDX body={data['body']} />
        <div className="flex flex-col items-center justify-start mt-16 w-full gap-component">
          <div className="flex flex-row gap-text items-center justify-center w-full">
            <div className="rounded-full overflow-hidden max-w-fit">
              <Image
                src={data['author']['avatar']['url']}
                alt={data['author']['name']}
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-base text-white85 font-medium text-center">
              {data['author']['name']}
            </h3>
          </div>
          <p className="text-xs text-white60 whitespace-pre-wrap text-center">
            Last modified on{' '}
            {format(new Date(data['updatedAt']), 'MMMM dd, yyyy')} at{' '}
            {format(new Date(data['updatedAt']), 'mm:ss aa')}.
          </p>
        </div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { article } = await gqlFetcher(
    `{ article(where: {slug: "about"}, stage: PUBLISHED) ${GQL_DATA_ARTICLE} }`
  );

  const body = await serialize(article['body'], {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    }
  });

  const { text } = readingTime(article['body']);

  return {
    props: {
      data: {
        ...article,
        readtime: text,
        body
      }
    },
    revalidate: 2
  };
};

export default About;
