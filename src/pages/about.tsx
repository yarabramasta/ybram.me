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

import Container from 'mod/components/Container';
import { apiFetcher } from 'mod/lib/api_fetcher';
import { getInternalUrl } from 'mod/lib/utils';

const MDX: any = dynamic(() => import('../components/MDX'), { ssr: false });

const About: NextPage = ({ data }: any) => {
  return (
    <>
      <NextSeo
        title={data['title']}
        description={data['description']}
        openGraph={{
          images: [
            {
              url: getInternalUrl(
                `/api/og${encodeURIComponent(
                  `?title=${data['title']}&views${data['views']}&readtime${data['readtime']}&data=${data['publishedAt']}`
                )}`
              ).toString(),
              alt: data['excerpt'] ?? data['description']
            }
          ]
        }}
      />
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
  const readtime = readingTime(article['body']);

  return {
    props: {
      data: {
        ...article,
        body,
        readtime
      }
    },
    revalidate: 2
  };
};

export default About;
