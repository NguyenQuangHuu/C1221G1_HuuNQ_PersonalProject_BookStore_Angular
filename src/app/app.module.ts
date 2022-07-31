import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {AppRoutingModule} from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {SharedModule} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {UserRoutingModule} from './user/user-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import {HttpClientModule} from '@angular/common/http';
import {BookRoutingModule} from './book/book-routing.module';
import {PaginatorModule} from 'primeng/paginator';
import {GalleriaModule} from 'primeng/galleria';
import {CartDetailComponent} from './cart/cart-detail/cart-detail.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {userInterceptor} from './user/user.interceptor';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserRoutingModule,
    AccordionModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    PasswordModule,
    ToastModule,
    CarouselModule,
    HttpClientModule,
    BookRoutingModule,
    PaginatorModule,
    GalleriaModule,
    ConfirmDialogModule,
    NgxPayPalModule,
    BadgeModule
  ],
  providers: [userInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
