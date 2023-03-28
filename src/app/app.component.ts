import { Router } from '@angular/router';
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
  constructor(
    private userService: UserService,
    private login: LoginService,
    private router: Router
  ) {}
  title = 'my-project';
  token: string | null = localStorage.getItem('tokencartphone');
  user: User | undefined;

  newUser: BehaviorSubject<User> = new BehaviorSubject<User>({});

  ngOnInit() {
    console.log('ngOnInit appcomponent');

    const token: string | null = localStorage.getItem('tokencartphone');
    console.log('token: ' + token);
    if (token) {
      this.userService.getdetail(JSON.parse(token)).subscribe((response) => {
        if (!response) {
          this.router.navigate(['/login']);
        } else {
          this.user = response.content;
          this.login.user.next(response.content);
          console.log(response.content);
          this.login.image.next(response.content.avatar);
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
}
