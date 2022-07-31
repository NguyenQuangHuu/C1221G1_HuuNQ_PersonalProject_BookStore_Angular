import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Cart} from '../../cart/cart';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  book: Book[];
  first: any;
  last: any;
  totalElement: any;
  totalPage: any;
  currentPage: any;
  size: any;
  name = '';
  sort = 'id';
  images: any[] = [
    {
      previewImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.png',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.png'
    },
    {
      previewImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/shopeePAY_840X320.png',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/shopeePAY_840X320.png'
    },
    {
      previewImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/disney-resize_T07.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/disney-resize_T07.jpg'
    },
    {
      previewImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/Lego_840x320.png',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/Lego_840x320.png'
    },
    {
      previewImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/Sach_tham_khao_840x320.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/magentothem/banner7/Sach_tham_khao_840x320.jpg'
    },
  ];
  responsiveOptions: any;

  constructor(private bookService: BookService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      }
    ];
  }

  map = new Map<number, number>();

  ngOnInit(): void {
    this.bookService.getAllBook(this.name, this.currentPage - 1, this.sort, 'desc').subscribe(
      x => {
        // @ts-ignore
        this.book = x.content;
        // @ts-ignore
        this.totalElement = x.totalElements;
        // @ts-ignore
        this.totalPage = x.totalPages;
        // @ts-ignore
        this.currentPage = x.number;
        // @ts-ignore
        this.size = x.size;
        this.book.forEach(id => this.map.set(id.id, 1));
      }
    );
  }

  paginate($event: any) {
    // @ts-ignore
    this.currentPage = event.target.innerText;
    this.ngOnInit();
  }

  searchSubmit() {
    this.ngOnInit();
  }

  decrease(num: number) {
    if (this.map.get(num) > 1) {
      this.map.set(num, this.map.get(num) - 1);
    }
  }

  increase(num: number) {
    if (this.map.get(num) < 10) {
      this.map.set(num, this.map.get(num) + 1);
    }
  }

  addToCart(num: number) {
    // let array = new Map(JSON.parse(window.localStorage.getItem('cart-by-user')));
    // console.log(array);
    let quantity = this.map.get(num);
    let book: Book = this.book.find(x => x.id === num);
    let cart: Cart = {book, quantity};
    let cartMap: Cart[] = [];
    if (!window.localStorage.getItem('cart-user-book-user-cart')) {
      cartMap.push(cart);
      window.localStorage.setItem('cart-user-book-user-cart', JSON.stringify(cartMap));
    } else {
      cartMap = JSON.parse(window.localStorage.getItem('cart-user-book-user-cart'));
      const checkIndex = cartMap.map(c => c.book.id).indexOf(cart.book.id);
      if (checkIndex !== -1) {
        cartMap[checkIndex].quantity += quantity;
      } else {
        cartMap.push(cart);
      }
    }
    window.localStorage.setItem('cart-user-book-user-cart', JSON.stringify(cartMap));
  }
}
