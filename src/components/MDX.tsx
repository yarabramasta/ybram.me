import { CH } from '@code-hike/mdx/components';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import type { FC } from 'react';

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} className="anchor" />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const SpotifyNow = () => <></>;

const components = { CH, SpotifyNow, a: CustomLink };

const MDX: FC<{ body: any }> = ({ body }) => {
  return (
    <article className="prose prose-headings:text-white prose-headings:font-bold prose-a:text-accent prose-a:duration-300 prose-a:ease-in-out prose-p:text-white85 prose-a:no-underline hover:prose-a:underline prose-hr:border-white20 prose-p:text-base prose-quoteless">
      <MDXRemote {...body} components={{ ...components }} />
    </article>
  );
};

export default MDX;
