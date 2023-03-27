import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CartphoneService } from 'src/app/cartphone.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  sum = 0;
  payment = 0;
  constructor(public cartphoneService: CartphoneService) {}
  ngOnInit(): void {
    console.log(this.cartphoneService.cartphone);
    this.calculateSumAndPayment();
  }

  onClicks(id: number, step: number): void {
    const item = _.find(this.cartphoneService.cartphone, { id });
    if (item) {
      item.quantity += step;
      if (item.quantity === 0) {
        _.remove(this.cartphoneService.cartphone, (item) => item.id === id);
      }
      this.calculateSumAndPayment();
    }
  }

  private calculateSumAndPayment(): void {
    // this.sum = _.sumBy(
    //   this.cartphoneService.cartphone,
    //   (currentValue) => currentValue.quantity
    // );
    this.sum = _.sumBy(this.cartphoneService.cartphone, 'quantity');
    // this.sum = this.cartphoneService.cartphone.length;
    this.payment = _.sumBy(
      this.cartphoneService.cartphone,
      (currentValue) => currentValue.quantity * currentValue.price
    );
  }
}
