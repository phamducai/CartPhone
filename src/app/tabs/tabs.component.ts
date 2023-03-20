import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(private dataService: PhoneService) {}
  currentTab = 1;
  selectTab(index: number): void {
    this.currentTab = index;
  }
  message: any;
  ngOnInit(): void {}
}
