import {
  ChangeDetectorRef,
  Component,
  Injectable,
  OnInit,
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone, cartphone } from 'src/models/phone';
import * as _ from 'lodash';
import { CartphoneService } from '../cartphone.service';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class PhonedetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    public location: Location,
    private cdRef: ChangeDetectorRef,
    public cartphoneService: CartphoneService
  ) {}
  rate: number = 0;
  sum: number = this.cartphoneService.numberofphone;
  phone: Phone | undefined;
  updateDetectChange(): void {
    this.cdRef.detectChanges();
  }
  onClick(phone: Phone | any) {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    let item = _.find(this.cartphoneService.cartphone, { id: id });
    console.log(item);
    if (!item) {
      this.cartphoneService.cartphone.push({ ...phone, quantity: 1 });
    } else {
      item.quantity++;
    }
    this.sum = _.reduce(
      this.cartphoneService.cartphone,
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      },
      0
    );
  }
  ngOnInit(): void {
    this.getPhoneFromRoute();
    this.rate = this.phone?.rate ? this.phone?.rate : 0;
    this.sum = _.reduce(
      this.cartphoneService.cartphone,
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      },
      0
    );
  }
  goBack(): void {
    this.location.back();
  }
  getPhoneFromRoute(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.phoneService.getPhoneById(id).subscribe((item) => {
      this.rate = item?.rate ? item?.rate : 0;
      this.updateDetectChange();
      return (this.phone = item);
    });
  }
}
