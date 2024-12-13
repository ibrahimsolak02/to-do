import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  private dataSubject = new BehaviorSubject<string>(localStorage.getItem('userName') || ''); // Başlangıç verisi
  currentData = this.dataSubject.asObservable();

  updateData(newData: string) {
    localStorage.setItem('userName',newData);
    this.dataSubject.next(newData);
  }

  private getFromLocalStorage(key: string): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private saveToLocalStorage(key: string, value: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  }
}
