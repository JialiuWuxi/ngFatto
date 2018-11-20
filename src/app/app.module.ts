import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { CornerInfoComponent } from './corner-info/corner-info.component';


export const protectedResourceMap:[string, string[]][]=[['https://graph.microsoft.com/v1.0/me', ['user.read']]];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    CornerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MsalModule.forRoot({
      clientID: "21880ed0-11a5-4697-be08-944eed744fb8",
      protectedResourceMap: protectedResourceMap,
    }),

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
