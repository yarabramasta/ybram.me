import Link from 'next/link';
import type { FC } from 'react';

import { Article } from '@/data/article';

const ArticleCard: FC<{
  article: Article;
  gradient?: boolean;
}> = ({ article, gradient = false }) => {
  return (
    <Link
      href={article.props.slug ? `/blog/${article.props.slug}` : '/404'}
      className="article-card"
      onClick={evt => evt.preventDefault()}
    >
      <div
        className={`h-full overflow-hidden ${
          gradient ? 'gradient-border' : 'border border-white20'
        } flex flex-col p-component gap-section`}
      >
        <div className="flex flex-col gap-text flex-grow">
          <h3 className="text-lg font-semibold">{article.props.title}</h3>
          <p className="text-normal text-white60">
            {article.readtime} &bull; {`${article.createdAtStr}`}
          </p>
        </div>
        <div className="flex flex-row gap-text items-center">
          <svg
            height={24}
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white60"
          >
            <path
              d="M4.5 12.5c3-6.5 12-6.5 15 0M12 16a2 2 0 110-4 2 2 0 010 4z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-normal text-white60">{0} views</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
