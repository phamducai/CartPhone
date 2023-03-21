import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  title = 'my-project';
  token: string | null = localStorage.getItem('tokencartphone');
  user: User | undefined;

  newUser: BehaviorSubject<User> = new BehaviorSubject<User>({});

  ngOnInit() {
    if (this.token) {
      this.userService
        .getdetail(JSON.parse(this.token))
        .subscribe((response) => {
          this.user = response.content;
          console.log(this.user);
          this.newUser.next(response.content);
        });
    }
  }
}
