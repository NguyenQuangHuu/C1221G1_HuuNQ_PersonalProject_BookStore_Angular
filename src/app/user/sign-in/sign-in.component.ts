import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user';
import {TokenStoreService} from '../token-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  skeletonHidden =  false;
  user: User;
  isSignIn = false;
  mgs: string;
  constructor(private userService: UserService,
              private tokenStorageService: TokenStoreService,
              private route: Router,
              private messageService: MessageService) {
    this.signInForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });
    if (this.isSignIn) {
      this.showIsLogIn();
      setTimeout(() => {
        this.route.navigateByUrl('/').then();
      });
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.skeletonHidden = true;
    }, 1500);
  }
  submitSignIn() {
      this.user = this.signInForm.value;
      console.log(this.user);
      this.userService.signIn(this.user).subscribe(
        next => {
          this.showSuccess();
          this.skeletonHidden = false;
          setTimeout(() => {
            this.skeletonHidden = true;
            this.tokenStorageService.setToken(next);
            this.route.navigateByUrl('/').then();
          }, 1500);
          this.isSignIn = true;
          this.ngOnInit();
        }, error => {
          console.log(error.status);
        }
      );
  }
  showSuccess() {
    this.messageService.add({key: 'key1', severity: 'success', summary: 'Thao tác thành công', detail: 'Bạn đã đăng nhập thành công!'});
  }
  showIsLogIn() {
    this.messageService.add({key: 'key2', severity: 'warning', summary: 'Thông báo', detail: 'Bạn đã đăng nhập rồi!'});

  }
}
