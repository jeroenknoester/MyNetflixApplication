import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  constructor() { }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') !== null;
  }

  getToken(): string {
    return localStorage.getItem('loggedIn');
  }
}
