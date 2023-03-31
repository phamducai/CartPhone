import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/phone.service';
import { Phone } from 'src/models/phone';
import * as _ from 'lodash';
import { CartphoneService } from 'src/app/cartphone.service';
import { TabsComponent } from '../tabs.component';
import { IdService } from 'src/app/id.service';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.css'],
})
export class PhonedetailComponent implements OnInit {
  id: number = 0;
  rate = 0;
  sum = 0;
  phone: Phone | undefined;
  constructor(
    private phoneService: PhoneService,
    public cartphoneService: CartphoneService,
    public tabsComponent: TabsComponent,
    private idService: IdService
  ) {}

  ngOnInit(): void {
    this.idService.id$.subscribe((id) => (this.id = id));
    console.log(this.id);
    this.getPhoneFromRoute();
    this.sum = _.reduce(
      this.cartphoneService.cartPhone,
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      },
      0
    );
  }

  onClick(phone: Phone | any): void {
    const id = this.id;
    let item = _.find(this.cartphoneService.cartPhone, { id });
    if (!item) {
      this.cartphoneService.cartPhone.push({ ...phone, quantity: 1 });
    } else {
      item.quantity++;
    }
    this.sum = _.reduce(
      this.cartphoneService.cartPhone,
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      },
      0
    );
  }
  goBack(): void {
    history.back();
  }
  getPhoneFromRoute(): void {
    const id = this.id;
    this.phoneService.getPhonebyId(id).subscribe((item) => {
      this.phone = item.content || ({} as Phone);
      this.rate = item?.content.rate || 0;
    });
  }

  async selectTab(index: number): Promise<void> {
    this.tabsComponent.selectTab(index);
  }
}
