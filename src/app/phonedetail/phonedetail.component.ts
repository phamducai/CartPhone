import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone } from 'src/models/phone';
import * as _ from 'lodash';
import { CartphoneService } from '../cartphone.service';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.css'],
})
export class PhonedetailComponent implements OnInit {
  rate = 0;
  sum = 0;
  phone: Phone | undefined;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    public cartphoneService: CartphoneService,
    public tabsComponent: TabsComponent
  ) {}

  ngOnInit(): void {
    console.log(this.phone);
    this.getPhoneFromRoute();
    this.sum = _.reduce(
      this.cartphoneService.cartphone,
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      },
      0
    );
  }

  onClick(phone: Phone | any): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let item = _.find(this.cartphoneService.cartphone, { id });
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
  goBack(): void {
    history.back();
  }
  getPhoneFromRoute(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.phoneService.getPhonebyId(id).subscribe((item) => {
      this.phone = item.content || ({} as Phone);
      this.rate = item?.content.rate || 0;
    });
  }

  currentTab = 1;
  async selectTab(index: number): Promise<void> {
    this.currentTab = index;
    await this.goBack();
    this.tabsComponent.selectTab(index);
  }
}
