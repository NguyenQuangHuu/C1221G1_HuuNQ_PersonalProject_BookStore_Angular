import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: []
})
export class BookDetailComponent implements OnInit {
  book: any;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    this.activatedRoute.paramMap.subscribe(
      params => this.id = params.get('id')
    );
    this.bookService.getBookById(this.id).subscribe(
      x => {
        console.log(x);
        this.book = x;
        this.images.push({previewImageSrc: this.book.img, thumbnailImageSrc: this.book.img});
        console.log(this.book);
      },
      error => {
        console.log(error);
      }
    );
  }

  images: any[] = [
    {
      previewImageSrc: 'https://cdn0.fahasa.com/media/catalog/product//g/i/gi_i-thi_u-ph_t-h_nh-boxset-ajin_1.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/g/i/gi_i-thi_u-ph_t-h_nh-boxset-ajin_1.jpg'
    }, {
      previewImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg'
    }, {
      previewImageSrc:
        'https://cdn0.fahasa.com/media/catalog/product/t/i/tieu-thuyet-chuyen-the' +
        '---thanh-guom-diet-quy---cau-chuyen-ve-tinh-anh-em-va-doi-diet-quy-obi.jpg',
      thumbnailImageSrc:
        'https://cdn0.fahasa.com/media/catalog/product/t/i/tieu-thuyet-chuyen-the' +
        '---thanh-guom-diet-quy---cau-chuyen-ve-tinh-anh-em-va-doi-diet-quy-obi.jpg'
    }, {
      previewImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_181775.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_181775.jpg'
    }, {
      previewImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_180448.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_180448.jpg'
    }, {
      previewImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_29716.jpg',
      thumbnailImageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_29716.jpg'
    },
  ];
  responsiveOptions: any[] = [
    {

      breakpoint: '1024px',
      numVisible: 5
    }
    ,
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  ngOnInit(): void {
  }
}
