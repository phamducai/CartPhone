import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/models/user';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  user: User | undefined;
  constructor(private appComponent: AppComponent) {}
  ngOnInit(): void {
    this.user = this.appComponent.user;
    this.appComponent.newUser.subscribe(() => {
      this.user = this.appComponent.user;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('user', changes);
  }
}
