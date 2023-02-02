import format from 'date-fns/format';
import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { ArrowRight, GithubCircle, LinkedIn, Twitter } from 'iconoir-react';
import Container from 'mod/components/container';
import MDX from 'mod/components/mdx';
import { gqlFetcher, GQL_DATA_ARTICLE } from 'mod/lib/graphql_fetcher';
import { articleSeoConfig } from 'mod/lib/next-seo.config';
import Link from 'next/link';

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
            {format(new Date(data['publishedAt']), 'MMM dd, yyyy')} &bull;{' '}
            {data['readtime']} &bull; {String(data['views'])} views
          </p>
        </div>
        <div className="mb-normal flex flex-row w-full items-center justify-between gap-component">
          <Link
            href="https://github.com/yarabramasta"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full group"
          >
            <div className="flex flex-row w-full gap-component border border-white20 px-component py-text group-hover:bg-white04 duration-300 ease-in-out rounded-md items-center justify-between">
              <div className="flex flex-grow flex-row gap-text items-center justify-start">
                <GithubCircle height={18} color="#f2f2f9d9" />
                <p className="text-white85 text-sm">Github</p>
              </div>
              <ArrowRight
                height={18}
                color="#f2f2f9d9"
                className="-rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link
            href="https://twitter.com/yarabram"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full group"
          >
            <div className="flex flex-row w-full gap-component border border-white20 px-component py-text group-hover:bg-white04 duration-300 ease-in-out rounded-md items-center justify-between">
              <div className="flex flex-grow flex-row gap-text items-center justify-start">
                <Twitter height={18} color="#f2f2f9d9" />
                <p className="text-white85 text-sm">Twitter</p>
              </div>
              <ArrowRight
                height={18}
                color="#f2f2f9d9"
                className="-rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yara-bramasta-a1b711263"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full group"
          >
            <div className="flex flex-row w-full gap-component border border-white20 px-component py-text group-hover:bg-white04 duration-300 ease-in-out rounded-md items-center justify-between">
              <div className="flex flex-grow flex-row gap-text items-center justify-start">
                <LinkedIn height={18} color="#f2f2f9d9" />
                <p className="text-white85 text-sm">LinkedIn</p>
              </div>
              <ArrowRight
                height={18}
                color="#f2f2f9d9"
                className="-rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] duration-300 ease-in-out"
              />
            </div>
          </Link>
        </div>
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
