import Link from 'next/link';
import type { FC } from 'react';

import { FeaturedArticleList } from 'mod/components/shared/article';
import { FeaturedArticle, useFeaturedArticles } from 'mod/data/article';

type Props = {
  fallback: FeaturedArticle[];
};

const FeaturedSection: FC<Props> = ({ fallback }) => {
  const { articles, error, isLoading } = useFeaturedArticles(fallback);

  if (isLoading)
    return (
      <p className="text-sm font-medium text-white60 w-full">Loading...</p>
    );

  if (error) {
    return (
      <p className="text-sm font-medium text-danger w-full">
        Unable to retrieve latest articles.
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-component w-full mb-section">
      <h2 className="text-xl font-bold">Featured</h2>
      <FeaturedArticleList articles={articles} />
      <DiscoverMoreButton />
    </section>
  );
};

const DiscoverMoreButton: FC = () => {
  return (
    <Link
      href="/blog"
      onClick={evt => evt.preventDefault()}
      className="group w-fit"
    >
      <div className="flex flex-row duration-300 ease-in-out gap-text group-hover:gap-4 group-active:gap-4">
        <p className="text-base text-white60 group-hover:text-white group-active:text-white duration-300 ease-in-out">
          Discover more
        </p>
        <svg
          height={24}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white60 group-hover:stroke-white group-active:stroke-white"
        >
          <path
            d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default FeaturedSection;
