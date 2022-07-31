import {AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenStoreService} from '../user/token-store.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  username = '';
  constructor(private cdr: ChangeDetectorRef, private tokenStorageService: TokenStoreService) {
  }
  ngOnInit(): void {
  }
  getUser(): any {
    if (this.tokenStorageService.getObjectToken()) {
      this.username = this.tokenStorageService.getObjectToken().username;
    }
  }
  ngAfterViewChecked(): void {
    this.getUser();
    this.cdr.detectChanges();
  }

  logout() {
    this.tokenStorageService.logOut();
    this.username = '';
    this.ngAfterViewChecked();
  }
}
