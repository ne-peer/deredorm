import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
