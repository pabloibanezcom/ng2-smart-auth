import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { AuthenticationService } from './authentication.service';

export * from './authentication.service';
export * from './models/authData';
export * from './models/login';
export * from './authGuard';
export * from './token.interceptor';

@NgModule({
})
export class Ng2SmartAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2SmartAuthModule,
      providers: [
        AuthenticationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ]
    };
  }
}
