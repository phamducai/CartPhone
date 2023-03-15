import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone } from 'src/models/phone';
@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.css']
})
export class PhonedetailComponent implements OnInit{
  constructor(  private route: ActivatedRoute,
    private  phoneService: PhoneService,
    public location: Location){}
    phone: Phone | undefined ;

  ngOnInit(): void {
    this.getPhoneFromRoute();
    console.log(this.phone)
  }
  goBack(): void {
    this.location.back();
  }
  getPhoneFromRoute (): void{
    let id =this.route.snapshot.paramMap.get('id')
    this.phoneService.getPhoneById(id).subscribe(item => {
      return this.phone =item
    })
    }

}
