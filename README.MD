# ng2-smart-auth

## Installation

To install this library, run:

```bash
$ npm install ng2-smart-auth --save
```

## Setting Up

### TokenInterceptor

This makes all http requests to contain the token stored in local storage (if exists). We need to import it in the main `AppModule`: 

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from 'ng2-smart-auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### AuthenticationService and AuthGuard

AuthenticationService is the main service in the module. We can use it to manage user authentication state (login, logout,...)

AuthGuard is a [CanActivate](https://angular.io/api/router/CanActivate) guard that checks if the user is authenticated or not.

First we need to import them in the highest module where we want to use authentication.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthenticationService, AuthGuard } from 'ng2-smart-auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...,
    AuthenticationService,
    AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AdminModule { }
```
Then we can use AuthenticationService as follows:

```typescript
import { AuthenticationService } from 'ng2-smart-auth';

...

constructor(private authenticationService: AuthenticationService) { }

...

login() {
    this.authenticationService.login('myLoginUrl', myLoginObj)
      .then(res => {
        // Navigate to next view
      })
      .catch(err => {
        // Handle error
      });
  }
```
Finally we should set up AuthGuard (optional) to stop user to navigate to non allowed view whitout authorization.

```typescript
...
import { AuthGuard } from 'ng2-smart-auth';

const adminRoutes: Routes = [
    ...
    {
        path: ':section',
        component: AdminBaseComponent,
        canActivate: [AuthGuard],
        data: {
            redirectUrl: '/admin/login'
        }
    }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);
```
Note that data.redirectUrl defines the url to redirect when not allowed.


## License

MIT © [Pablo Ibanez](www.pabloibanez.com)
