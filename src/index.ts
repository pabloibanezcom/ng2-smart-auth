import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './authentication.service';
import { AuthDataService } from './authData.service';
import { AuthGuard } from './authGuard';
import { TokenInterceptor } from './token.interceptor';

export * from './authentication.service';
export * from './authData.service';
export * from './models/authData';
export * from './models/login';
export * from './authGuard';
export * from './token.interceptor';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class Ng2SmarthAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2SmarthAuthModule,
      providers: [
        AuthenticationService,
        AuthDataService,
        AuthGuard
      ]
    };
  }
}
