import {Book} from '../book/book';

export interface Cart {
  book: Book;
  quantity: number;
}
