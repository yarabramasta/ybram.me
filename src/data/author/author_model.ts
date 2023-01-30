/* eslint-disable no-unused-vars */
import { fromAuthorJson } from './author_mapper';

export interface IAuthorJson {
  name: string;
  default: string;
  fallback: string;
}

export type Avatar = {
  default: string;
  fallback: string;
};

class Author {
  public constructor(
    public readonly name: string,
    public readonly avatar: Avatar
  ) {}

  public static fromJson(json: IAuthorJson) {
    return fromAuthorJson(json);
  }
}

export default Author;
