import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(public location: Location) {}
  currentPath = this.location.path();

  currentTab = 1;
  selectTab(index: number): void {
    this.currentTab = index;
  }
  ngOnInit(): void {
    console.log(this.currentPath);
  }
}
