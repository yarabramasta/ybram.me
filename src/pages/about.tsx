import { remarkCodeHike } from '@code-hike/mdx';
import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import theme from 'shiki/themes/poimandres.json';

import Container from 'mod/components/container';
import { apiFetcher } from 'mod/lib/api_fetcher';
import { articleSeoConfig } from 'mod/lib/next-seo.config';

const MDX: any = dynamic(() => import('../components/mdx'), { ssr: false });

const About: NextPage = ({ data }: any) => {
  return (
    <>
      <NextSeo {...articleSeoConfig(data, false)} />
      <Container>
        <div className="mb-section">
          <h1 className="text-xl font-bold">About</h1>
        </div>
        <MDX body={data['body']} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { article } = await apiFetcher('/article?slug=about');

  const body = await serialize(article['body'], {
    parseFrontmatter: false,
    mdxOptions: {
      useDynamicImport: true,
      remarkPlugins: [
        remarkGfm,
        [remarkCodeHike, { theme, lineNumbers: false, autoImport: false }]
      ],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    }
  });

  const { text } = readingTime(article['body']);

  return {
    props: {
      data: {
        ...article,
        body,
        readtime: text
      }
    },
    revalidate: 2
  };
};

export default About;
