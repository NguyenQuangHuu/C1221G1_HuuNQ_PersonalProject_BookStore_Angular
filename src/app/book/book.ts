import {Author} from './author';
import {Category} from './category';

export interface Book {

  author?: Author;
  category?: Category;
  code?: string;
  description?: string;
  id?: number;
  img?: string;
  name?: string;
  price?: string;
  publisher?: string;
  quantity?: number;
  releaseDate?: string;
  size?: string;
  totalPage?: string;
  translator?: string;
}
