import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';
import readingTime from 'reading-time';

import { Author, type IAuthorJson } from '../author';
import { fromArticleJson, toFeaturedArticle } from './article_mapper';

export interface IArticleJson {
  _id: string;
  _createdAt: string;
  slug: Slug;
  title: string;
  featured: boolean;
  author: IAuthorJson;
  body: string;
}

export type Slug = {
  current: string;
};

class Article {
  public constructor(
    // eslint-disable-next-line no-unused-vars
    public readonly props: {
      id: string;
      slug: string;
      title: string;
      featured: boolean;
      author: Author;
      body: string;
      createdAt: Date;
    }
  ) {}

  public get readtime() {
    return readingTime(this.props.body).text;
  }

  public get createdAtStr() {
    return format(this.props.createdAt, 'MMM dd, yyyy');
  }

  public get createdAtAgo() {
    return formatDistance(this.props.createdAt, new Date(), {
      addSuffix: true
    });
  }

  public static fromJson(json: IArticleJson) {
    return fromArticleJson(json);
  }

  // eslint-disable-next-line no-unused-vars
  public static toFeaturedArticle(article: IArticleJson): FeaturedArticle;
  // eslint-disable-next-line no-dupe-class-members
  public static toFeaturedArticle(
    article: Article | IArticleJson
  ): FeaturedArticle {
    return article instanceof Article
      ? toFeaturedArticle(article)
      : toFeaturedArticle(Article.fromJson(article));
  }
}

export interface FeaturedArticle
  extends Pick<typeof Article.prototype.props, 'id' | 'slug' | 'title'> {
  createdAtStr: string;
  readtime: string;
}

export default Article;
