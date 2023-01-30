import Link from 'next/link';
import { FC } from 'react';

import { Article, useFeaturedArticles } from '@/data/article';

import ArticleCard from '../article_card';

const FeaturedArticles: FC<{ fallback: Article[] }> = ({ fallback }) => {
  const { articles, error, isLoading } = useFeaturedArticles(fallback);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return (
      <p className="text-sm font-medium text-danger w-full text-center">
        Unable to retrieve latest articles.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-component w-full mb-section">
      <h2 className="text-xl font-bold">Featured</h2>
      <div className="flex flex-col md:flex-row gap-component items-stretch max-w-full justify-between w-full">
        {articles.map((article, i) => (
          <ArticleCard key={article.props.id ?? i} article={article} gradient />
        ))}
      </div>
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
    </div>
  );
};

export default FeaturedArticles;
