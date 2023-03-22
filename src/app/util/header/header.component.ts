import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/models/user';
import { AppComponent } from 'src/app/app.component';
import { TabsComponent } from '../../tabs/tabs.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  user: User | undefined;
  constructor(
    private appComponent: AppComponent,
    public tabsComponent: TabsComponent
  ) {}
  ngOnInit(): void {
    this.user = this.appComponent.user;
    this.appComponent.newUser.subscribe(() => {
      this.user = this.appComponent.user;
    });
  }
  onClick(): void {
    console.log('haha');
    this.tabsComponent.selectTab(3);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('user', changes);
  }
  navigate(): void {}
}
