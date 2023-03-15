import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Phone } from 'src/models/phone';
import { fakePhones } from './fake-movieshopping';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }
  getPhones(): Observable<Phone[]>{
    return of(fakePhones)
  }
  getPhoneById(id: string|null): Observable<Phone|undefined> {
    const idNumber =Number(id)
    return of(fakePhones.find(item=>item.id===idNumber))}

}
