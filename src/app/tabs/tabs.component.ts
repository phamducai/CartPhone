import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
  constructor(public location:Location){}
  currentTab =1
  selectTab(index: number): void {
    this.currentTab = index;
  }
 ngOnInit(): void {
   console.log(this.location)
 }
}
