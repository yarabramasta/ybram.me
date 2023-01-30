import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';
import readingTime from 'reading-time';

import { Author, IAuthorJson } from '../author';

import { fromArticleJson } from './article_mapper';

export interface IArticleJSON {
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

  public static fromJson(json: IArticleJSON) {
    return fromArticleJson(json);
  }
}

export default Article;
