import {
  Component,
  Injectable,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/models/user';
import { LoginService } from './login.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private userService: UserService, private login: LoginService) {}
  title = 'my-project';
  token: string | null = localStorage.getItem('tokencartphone');
  user: User | undefined;

  newUser: BehaviorSubject<User> = new BehaviorSubject<User>({});

  ngOnInit() {
    console.log('ngOnInit');

    const token: string | null = localStorage.getItem('tokencartphone');
    if (token) {
      this.userService.getdetail(JSON.parse(token)).subscribe((response) => {
        console.log(response);

        this.user = response.content;
        this.login.user.next(this.user);
        console.log(this.user);
        this.newUser.next(response.content);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
}
