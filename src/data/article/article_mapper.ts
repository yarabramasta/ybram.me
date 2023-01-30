import { Author } from '../author';
import Article, {
  type FeaturedArticle,
  type IArticleJson
} from './article_model';

export function fromArticleJson(json: IArticleJson): Article {
  const article = new Article({
    id: json['_id'],
    slug: json['slug']['current'],
    title: json['title'],
    author: Author.fromJson(json['author']),
    featured: json['featured'],
    body: json['body'],
    createdAt: new Date(json['_createdAt'])
  });

  return article;
}

export function toFeaturedArticle({
  readtime,
  props: { id, title, slug },
  createdAtStr
}: Article): FeaturedArticle {
  return {
    id,
    slug,
    title,
    readtime,
    createdAtStr
  };
}
