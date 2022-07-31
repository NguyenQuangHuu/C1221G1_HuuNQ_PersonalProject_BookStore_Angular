import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Cart} from '../cart';
import {ConfirmationService} from 'primeng/api';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
  providers: [ConfirmationService]
})
export class CartDetailComponent implements OnInit, AfterViewChecked {
  public payPalConfig?: IPayPalConfig;
  cartDetail: Cart[];
  totalBill = 0;
  dollarBill:string;
  constructor(private confirmDialog: ConfirmationService) {
    this.cartDetail = JSON.parse(window.localStorage.getItem('cart-user-book-user-cart'));
  }

  ngOnInit(): void {
    this.totalBill = this.totalBillFunction();
    this.dollarBill = (this.totalBill/23000).toFixed(2);
    this.initConfig();
  }

  ngAfterViewChecked(): void {
    window.localStorage.setItem('cart-user-book-user-cart', JSON.stringify(this.cartDetail));
  }

  increase(cd: Cart) {
    if (cd.quantity < 25) {
      cd.quantity++;
    }
    this.totalBill = this.totalBillFunction();
    this.dollarBill = (this.totalBill/23000).toFixed(2);

  }
  totalBillFunction(): number {
    let sum = 0;
    this.cartDetail.forEach(
      x => {
        sum += (x.quantity * (+x.book.price));
      }
    );
    return sum;
  }
  decrease(cd: Cart) {
    if (cd.quantity > 0) {
      cd.quantity--;
    }
    if (cd.quantity === 0) {
      this.confirm(cd);
    }
    this.totalBill = this.totalBillFunction();
    this.dollarBill = (this.totalBill/23000).toFixed(2);

  }

  confirm(cd) {
    this.confirmDialog.confirm({
      message: 'Bạn thực sự muốn xóa sản phẩm này?',
      accept: () => {
        this.cartDetail = this.cartDetail.filter(cart => !(cart.book === cd.book));
        // window.localStorage.setItem('cart-user-book-user-cart', JSON.stringify(this.cartDetail));
        this.ngOnInit();
      },
      reject: () => {
        if (cd.quantity === 0) {
          cd.quantity++;
        }
      }
    });
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AeoFAFuY16slNWsPWSNAoKPlje2xXzWRGo_PjtToe6j_P7eCVgTEetWc6-97FRGsVXg0kr0llVeAz5ip',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.dollarBill,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.dollarBill,
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.dollarBill,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
