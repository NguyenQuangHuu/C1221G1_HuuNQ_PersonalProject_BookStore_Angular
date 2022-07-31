import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartDetailComponent} from './cart/cart-detail/cart-detail.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'books',
  },
  {
    path: 'users', loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'books', loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  },
  {
    path: 'cart-detail', component: CartDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
