import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/models/phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  phones: Phone[] | undefined;
  constructor(private phoneService: PhoneService) {}
  selectedPhone: Phone | undefined;
  onSelect(phone: Phone): void {
    this.selectedPhone = phone;
  }

  // getMPhonesFromServices(): void {
  //   this.phoneService
  //     .getPhones()
  //     .subscribe((updatedMovies) => (this.phones = updatedMovies));
  // }
  getMPhonesFromServices(): void {
    this.phoneService.getPhone().subscribe((data: any) => {
      this.phones = data.content;
    });
  }
  ngOnInit() {
    this.getMPhonesFromServices();
  }
}
