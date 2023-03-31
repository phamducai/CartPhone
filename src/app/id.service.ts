import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IdService {
  constructor() {}

  id = new BehaviorSubject<number>(1);
  id$ = this.id.asObservable();
  setId(id: number) {
    this.id.next(id);
  }
}
