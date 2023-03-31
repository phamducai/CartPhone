import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { TabsComponent } from '../../tabs/tabs.component';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  image: string = '';
  constructor(
    public tabsComponent: TabsComponent,
    private login: LoginService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.login.image$.subscribe((image) => {
      this.image = image;
      this.updateDetectChange();
    });
    this.login.user$.subscribe((user) => {
      this.image = user?.avatar;
      this.updateDetectChange();
    });
  }
  onClick(): void {
    this.tabsComponent.selectTab(3);
  }
  updateDetectChange(): void {
    this.cdRef.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'huhu');
  }
  navigate(): void {
    console.log('haha');
  }
}
