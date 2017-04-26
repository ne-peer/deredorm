import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // バグ対応: https://github.com/angular/angular/issues/14288
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { OauthComponent } from './oauth/oauth.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { DereAddComponent } from './manage/dere-add/dere-add.component';
import { DereListComponent } from './manage/dere-list/dere-list.component';
import { UnitDetailComponent } from './manage/unit-detail/unit-detail.component';

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
  { path: 'manage/add', component: DereAddComponent },
  { path: 'list', component: DereListComponent },
  { path: 'units/:unit', component: UnitDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent,
    SideNavbarComponent,
    DereAddComponent,
    DereListComponent,
    UnitDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    MaterialModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
