import { Injectable } from '@angular/core';
import { cartPhone } from 'src/models/phone';

@Injectable({
  providedIn: 'root',
})
export class CartphoneService {
  constructor() {}
  cartPhone: cartPhone[] = [];
}
