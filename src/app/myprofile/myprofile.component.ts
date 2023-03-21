import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';
import * as dayjs from 'dayjs';

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
  formatdata: string = '';

  ngOnInit(): void {
    this.user = this.appComponent.user;
    console.log(this.user);
    this.formatdata = dayjs(this.user?.dateOfBirth).format('YYYY-MM-DD');
    this.selectedSex = this.user?.sex;
    this.imageUrl = this.user?.avatar;
  }

  constructor(
    private userService: UserService,
    private appComponent: AppComponent
  ) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        console.log(this.imageUrl);
      };
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
