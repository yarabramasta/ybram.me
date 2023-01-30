import type { FC } from 'react';

import type { FeaturedArticle } from 'mod/data/article';

import FeaturedArticleCard from './featured_article_card';

type Props = {
  articles: FeaturedArticle[];
};

const FeaturedArticleList: FC<Props> = ({ articles }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-component items-stretch max-w-full justify-between w-full">
      {articles.map(article => (
        <FeaturedArticleCard key={article.id} article={article} />
      ))}
    </ul>
  );
};

export default FeaturedArticleList;
