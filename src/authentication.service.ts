import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthDataService } from './authData.service';
import { AuthData } from './models/authData';
import { Login } from './models/login';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private authDataService: AuthDataService
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
    const token = this.authDataService.getAuthData();
    return token ? true : false;
  }

  private extractData(res: any) {
    const authData = new AuthData(res.token, res.user);
    this.authDataService.setAuthData(authData);
  }

  private handleError(error: any): Promise<any> {
    if (error.status >= 500) {
      console.error('Internal error', error);
    }
    return Promise.reject(error.message || error);
  }


}
