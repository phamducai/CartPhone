import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

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
  company: string = '15,Duy Tan,Dich Vong Hau,Cau Giay,Ha Noi';
  home: string = '15,Duy Tan,Dich Vong Hau,Cau Giay,Ha Noi';

  ngOnInit(): void {
    this.getuser();
    this.selectedSex = this.user?.sex;
    this.imageUrl = this.user?.avatar;
    console.log(this.user);
  }
  getuser() {
    this.userService.getuser().subscribe((item) => (this.user = item));
  }

  constructor(private userService: UserService) {}
  //upload

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
