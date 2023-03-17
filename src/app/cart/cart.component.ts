import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CartphoneService } from '../cartphone.service';
import { PhonedetailComponent } from '../phonedetail/phonedetail.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public cartphoneService: CartphoneService) {}
  sum: number = this.cartphoneService.numberofphone;
  ngOnInit(): void {
    this.sum = _.reduce(
      this.cartphoneService.cartphone,
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      },
      0
    );
    console.log(this.sum);
  }
}
