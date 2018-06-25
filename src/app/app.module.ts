// Core Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // バグ対応: https://github.com/angular/angular/issues/14288
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// Used material2 (for UI) Components
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';

// AngularFire Components
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Original Componetns
import { AppComponent } from './app.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DereListComponent } from './components/manage/dere-list/dere-list.component';
import { UnitDetailComponent } from './components/manage/unit-detail/unit-detail.component';
import { DereDetailComponent } from './components/manage/dere-detail/dere-detail.component';
import { DereAutocompleteComponent } from './components/action/dere-autocomplete/dere-autocomplete.component';
import { UnitListComponent } from './components/manage/unit-list/unit-list.component';
import { UnitAutocompleteComponent } from './components/action/unit-autocomplete/unit-autocomplete.component';
import { ListComponent } from './components/layer/list/list.component';
import { GoToComponent } from './components/action/snack/go-to/go-to.component';
import { NavbarComponent } from './components/action/navbar/navbar.component';
import { ExistComponent } from './components/user/exist/exist.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CreateListComponent } from './components/manage/user-custom/create-list/create-list.component';
import { HomeComponent } from './components/manage/user-custom/home/home.component';

// Firebase seittings
const firebaseConfig = {
  apiKey: 'AIzaSyBU2kqeQV9OdwOsuu_Cwa_IedVxMkRnk_E',
  authDomain: 'deredorm.firebaseapp.com',
  databaseURL: 'https://deredorm.firebaseio.com',
  storageBucket: 'deredorm.appspot.com',
  messagingSenderId: '577838942819'
};

// Routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'idol', pathMatch: 'full' },
  { path: 'oauth', component: OauthComponent },
  { path: 'idol', component: DereListComponent },
  { path: 'unit', component: UnitListComponent },
  { path: 'idol/:name', component: DereDetailComponent },
  { path: 'unit/:unit', component: UnitDetailComponent },
  { path: 'manage', component: HomeComponent },
  { path: 'manage/list/create', component: CreateListComponent },
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
    UnitAutocompleteComponent,
    ListComponent,
    GoToComponent,
    NavbarComponent,
    ExistComponent,
    CreateListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    // Material2 components for UI.
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GoToComponent
  ]
})
export class AppModule { }
