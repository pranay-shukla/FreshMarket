import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpDownSideService {
  fruitsVeggiesSidebar = new BehaviorSubject(true);
  brandSidebar = new BehaviorSubject(true);
  priceSidebar = new BehaviorSubject(true);
  constructor() { }
}
