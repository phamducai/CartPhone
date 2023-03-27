import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { TabsComponent } from '../../tabs/tabs.component';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  image: string | undefined;
  constructor(
    public tabsComponent: TabsComponent,
    private login: LoginService
  ) {}
  ngOnInit(): void {
    this.login.user$.subscribe((user) => {
      this.image = user?.avatar;
    });
    this.login.image$.subscribe((user) => {
      this.image = user;
    });
  }
  onClick(): void {
    this.tabsComponent.selectTab(3);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('user', changes);
  }
  navigate(): void {}
}
