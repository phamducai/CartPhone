import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/models/user';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';
import * as dayjs from 'dayjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit {
  user: User | undefined;
  //default form
  imageUrl: string | undefined;
  selectedSex: string = '';
  formatData: string = '';

  ngOnInit(): void {
    this.login.user$.subscribe((user) => {
      console.log('ngOnInit ', user);

      this.user = user;
      this.formatData = dayjs(this.user?.dateOfBirth).format('YYYY-MM-DD');
      this.selectedSex = this.user?.sex;
      this.imageUrl = this.user?.avatar;
      console.log(this.imageUrl);

      this.updateDetectChange();
    });
  }

  constructor(
    private appComponent: AppComponent,
    private userService: UserService,
    private login: LoginService,
    private cdRef: ChangeDetectorRef
  ) {}

  updateDetectChange(): void {
    this.cdRef.detectChanges();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0] as File;
    if (file) {
      const fd = new FormData();
      fd.append('file', file);
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      this.userService
        .uploadAvatar(this.user?.id, fd)
        .subscribe((response) => console.log(response));
    }
  }
  openFileSelector(): void {
    const input = document.getElementById('file-input');
    if (input) {
      input.click();
      input.addEventListener('change', this.onFileSelected.bind(this));
    }
  }
}
