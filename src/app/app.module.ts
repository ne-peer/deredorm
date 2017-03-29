import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { OauthComponent } from './oauth/oauth.component';

// firebase seittings
const firebaseConfig = {
    apiKey: "AIzaSyBU2kqeQV9OdwOsuu_Cwa_IedVxMkRnk_E",
    authDomain: "deredorm.firebaseapp.com",
    databaseURL: "https://deredorm.firebaseio.com",
    storageBucket: "deredorm.appspot.com",
    messagingSenderId: "577838942819"
};

// routing
const appRoutes: Routes = [
  { path: 'oauth', component: OauthComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
