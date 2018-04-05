import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css'],
  providers: [AsyncLocalStorage]
})
export class OauthComponent implements OnInit {

  private user;

  constructor(private afAuth: AngularFireAuth, protected localStorage: AsyncLocalStorage) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.localStorage.setItem('user', null).subscribe(() => {});
        return;
      }
      this.localStorage.setItem('user', user).subscribe(() => {});
    });
  }

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log(res));
  }

  signInWithTwitter() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    this.localStorage.getItem('user').subscribe(user => this.user);
  };

  get diagnostic() { return JSON.stringify(this.user); }

}
