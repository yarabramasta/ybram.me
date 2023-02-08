import { useWindowSize } from '@/hooks';
import { getPageMetadata } from '@/utils';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

const metadata = getPageMetadata();

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata.meta.map((v) => (
          <meta key={v.name} {...v} />
        ))}
        {metadata.links.map((v) => (
          <link key={v.rel} {...v} />
        ))}
      </Head>
      <Layout>
        <h1 className="font-bold text-5xl">Lorem, ipsum dolor sit amet.</h1>
      </Layout>
    </>
  );
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize();

  if (!width) return null;

  return (
    <div className="relative h-full w-full flex lg:flex-row">
      <nav className="lg:w-[240px] h-0 lg:h-full overflow-hidden p-10">
        <ul className="flex flex-col space-y-10 items-start justify-center h-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Guestbook</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-8">{children}</main>
      <aside className="lg:w-[240px] h-0 lg:h-full overflow-hidden"></aside>
    </div>
  );
};

export default Home;
