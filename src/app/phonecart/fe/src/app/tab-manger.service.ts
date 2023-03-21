import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabMangerService {
  Tab = new BehaviorSubject<number>(1);
  Tab$ = this.Tab.asObservable();

  setTab(tab: number) {
    this.Tab.next(tab);
  }

  constructor() {}
}
