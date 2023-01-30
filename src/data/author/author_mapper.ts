import Author, { IAuthorJson } from './author_model';

export function fromAuthorJson(json: IAuthorJson): Author {
  const author = new Author(json['name'], {
    default: json['default'],
    fallback: json['fallback']
  });

  return author;
}
