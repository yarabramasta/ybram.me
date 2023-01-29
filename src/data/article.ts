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

class Article {
  // eslint-disable-next-line no-unused-vars
  public constructor(public readonly props: Props) {}

  public get readEst() {
    const { text } = readingTime(this.props.body);
    return text;
  }

  public static factory(data: IArticleJSON) {
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

    return res;
  }
}

export default Article;
