import { Injectable } from '@angular/core';
import { AuthData } from './models/authData';

@Injectable()
export class AuthDataService {
    constructor() { }

    setAuthData(authData: AuthData) {
        localStorage.setItem('auth', JSON.stringify(authData));
    }

    getAuthData(): AuthData {
        return JSON.parse(localStorage.getItem('auth'));
    }
}
