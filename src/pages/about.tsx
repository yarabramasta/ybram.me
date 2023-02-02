import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { gqlFetcher, GQL_DATA_ARTICLE } from 'mod/lib/graphql_fetcher';
import ArticleLayout from 'mod/ui/article_layout';
import SocialCard, { icons } from 'mod/ui/social_card';
import { socialLinks } from 'mod/ui/social_cta';

const About: NextPage = ({ data }: any) => {
  return (
    <ArticleLayout data={data}>
      <div className="pb-section flex flex-col md:flex-row w-full items-center justify-between gap-text">
        {socialLinks.map((s, i) => (
          <SocialCard key={i} linkProps={s.linkProps} icon={icons[i]} />
        ))}
      </div>
    </ArticleLayout>
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
