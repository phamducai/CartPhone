import { IdService } from './../../id.service';
import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/models/phone';
import { PhoneService } from 'src/app/phone.service';
import { Subject } from 'rxjs';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  phones: Phone[] | undefined;
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  constructor(
    private phoneService: PhoneService,
    private idService: IdService,
    private tabsComponent: TabsComponent
  ) {}
  selectedPhone: Phone | undefined;
  onSelect(phone: Phone): void {
    this.selectedPhone = phone;
  }
  private searchSubject = new Subject<string>();
  getMPhonesFromServices(): void {
    this.phoneService.getPhones().subscribe((data: any) => {
      this.phones = data.content;
    });
  }
  searchPhonesByName(name: string): void {
    if (name === '') {
      this.getMPhonesFromServices();
    }
    this.phoneService.SearchPhonebyName(name).subscribe((data: any) => {
      this.phones = data.content;
    });
  }
  search(name: string): void {
    this.searchSubject.next(name);
  }
  Phonedetal(id: number) {
    this.idService.setId(id);
    this.tabsComponent.selectTab(4);
  }
  ngOnInit() {
    this.getMPhonesFromServices();
  }
}
