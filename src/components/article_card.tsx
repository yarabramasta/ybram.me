import Link from 'next/link';
import type { FC } from 'react';

import { IArticle } from '@/data/article';

const ArticleCard: FC<{
  article: Pick<IArticle, 'id' | 'title' | 'slug' | 'readEst' | 'views'>;
}> = ({ article }) => {
  return (
    <Link
      href={article.slug ? `/blog/${article.slug}` : '/404'}
      className="article-card"
      onClick={evt => evt.preventDefault()}
    >
      <div className="h-full overflow-hidden gradient-border flex flex-col p-component gap-section">
        <div className="flex flex-col gap-text flex-grow">
          <p className="text-normal text-white60">{article.readEst}</p>
          <h3 className="text-lg font-semibold">{article.title}</h3>
        </div>
        <p className="text-normal text-white60">{article.views} views</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
