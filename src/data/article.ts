import readingTime from 'reading-time';

export interface IArticleJSON {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  author: {
    name: string;
    default: string;
    fallback: string;
  };
  body: string;
  _createdAt: string;
}

interface Props {
  id: string;
  slug: string;
  title: string;
  author: {
    name: string;
    avatarUrl: {
      default: string;
      fallback: string;
    };
  };
  body: string;
  createdAt: Date;
}

export interface IArticle extends Partial<Props> {
  readEst: string;
  views: number;
}

class Article {
  // eslint-disable-next-line no-unused-vars
  public constructor(public readonly props: Props) {}

  public get readingTimeCount() {
    const { text } = readingTime(this.props.body);
    return text;
  }

  public static factory(data: IArticleJSON): IArticle {
    const res: Article = new Article({
      id: data._id,
      title: data.title,
      author: {
        name: data.author.name,
        avatarUrl: {
          default: data.author.default,
          fallback: data.author.fallback
        }
      },
      body: data.body,
      createdAt: new Date(data._createdAt),
      slug: data.slug.current
    });

    return {
      ...res.props,
      readEst: res.readingTimeCount,
      views: 0
    };
  }

  public static getLatestArticles(
    data: IArticleJSON[]
  ): Pick<IArticle, 'id' | 'title' | 'slug' | 'readEst' | 'views'>[] {
    const res = data.map(Article.factory);

    return res.map(({ title, readEst, id, slug, views }) => ({
      id,
      slug,
      title,
      readEst,
      views
    }));
  }
}

export default Article;
