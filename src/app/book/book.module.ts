import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {GalleriaModule} from 'primeng/galleria';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    PaginatorModule,
    InputTextModule,
    GalleriaModule,

  ]
})
export class BookModule { }
