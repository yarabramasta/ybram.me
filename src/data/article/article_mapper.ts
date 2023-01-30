import { Author } from '../author';
import Article, { IArticleJSON } from './article_model';

export function fromArticleJson(json: IArticleJSON): Article {
  const article = new Article({
    id: json['_id'],
    slug: json['slug'].current,
    title: json['title'],
    author: Author.fromJson(json['author']),
    featured: json['featured'],
    body: json['body'],
    createdAt: new Date(json['_createdAt'])
  });

  return article;
}
