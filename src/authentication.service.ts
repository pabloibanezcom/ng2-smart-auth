import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from './models/authData';
import { Login } from './models/login';


@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(url: string, login: Login) {
    return this.http
      .get(url + '?email=' + login.email + '&password=' + login.password)
      .toPromise()
      .then(this.extractData.bind(this))
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth');
  }

  isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('auth'));
    return token ? true : false;
  }

  getAuth(): AuthData {
    return JSON.parse(localStorage.getItem('auth'));
  }

  private extractData(res: any) {
    const authData = new AuthData(res.token, res.user, res.authLevel, res.data);
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  private handleError(error: any): Promise<any> {
    if (error.status >= 500) {
      console.error('Internal error', error);
    }
    return Promise.reject(error.message || error);
  }


}
