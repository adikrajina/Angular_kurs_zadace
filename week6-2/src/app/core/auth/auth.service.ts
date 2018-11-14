import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(username: string, token: string) {
    if (!username || !token) {
      return;
    }
    const loggedUser = JSON.stringify({username, token});
    localStorage.setItem('loggedUser', loggedUser);
  }

  logout() {
    localStorage.clear();
  }

}
