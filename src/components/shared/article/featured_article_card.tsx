import type { FC } from 'react';

import type { FeaturedArticle } from 'mod/data/article';

import { Card } from '../card';
import ArticleViewCount from './article_view_count';

type Props = {
  article: FeaturedArticle;
};

const FeaturedArticleCard: FC<Props> = ({ article }) => {
  return (
    //<Card href={`/blog/${article.slug}`}> */}
    <Card title={article.title} gradient>
      <div className="flex flex-col gap-text flex-grow mb-section">
        <h3 className="text-lg font-semibold">{article.title}</h3>
        <p className="text-normal text-white60">
          {article.readtime} &bull; {`${article.createdAtStr}`}
        </p>
      </div>
      <ArticleViewCount id={article.id} />
    </Card>
  );
};

export default FeaturedArticleCard;
