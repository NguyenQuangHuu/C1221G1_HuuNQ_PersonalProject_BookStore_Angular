import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PasswordModule} from 'primeng/password';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SkeletonModule} from 'primeng/skeleton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    SkeletonModule,
    MessagesModule,
    MessageModule
  ]
})
export class UserModule { }
