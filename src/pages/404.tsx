import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <>
      <NextSeo title="Not Found" />
      <div className="h-full flex flex-col gap-component justify-center items-center px-normal max-w-[640px] mx-auto text-center">
        <h2 className="text-xs text-white60">404 &bull; PAGE NOT FOUND</h2>
        <h1 className="text-xl font-bold">
          It seems like you lost your way, isn&apos;t it?
        </h1>
        <Link
          href="/"
          title="Yara Bramasta"
          className="text-base font-medium text-white85 hover:underline"
        >
          back to the homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
