import { Injectable } from '@angular/core';
import { cartphone } from 'src/models/phone';

@Injectable({
  providedIn: 'root',
})
export class CartphoneService {
  constructor() {}
  cartphone: cartphone[] = [];
  numberofphone: number = 0;
}
