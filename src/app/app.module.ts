import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // バグ対応: https://github.com/angular/angular/issues/14288
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { OauthComponent } from './oauth/oauth.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { DereListComponent } from './manage/dere-list/dere-list.component';
import { UnitDetailComponent } from './manage/unit-detail/unit-detail.component';
import { DereDetailComponent } from './manage/dere-detail/dere-detail.component';
import { DereAutocompleteComponent } from './action/dere-autocomplete/dere-autocomplete.component';
import { UnitListComponent } from './manage/unit-list/unit-list.component';

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
  { path: 'idol', component: DereListComponent },
  { path: 'unit', component: UnitListComponent },
  { path: 'idol/:name', component: DereDetailComponent },
  { path: 'unit/:unit', component: UnitDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent,
    SideNavbarComponent,
    DereListComponent,
    UnitDetailComponent,
    DereDetailComponent,
    DereAutocompleteComponent,
    UnitListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
