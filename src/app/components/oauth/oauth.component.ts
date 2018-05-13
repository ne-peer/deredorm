import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { User } from '../../models/store/user';
require('firebase/auth');

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  public user: User;
  private firebase;

  constructor(private afAuth: AngularFireAuth, protected localStorage: LocalStorage) {
    this.firebase = require('firebase/app');
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if (!res) {
        console.log('not logged in ');
        return;
      }
      console.log('logged in ');
      const user = new User(res.uid, res.displayName);
      this.user = user;
      this.localStorage.setItem('user', user).subscribe(() => { });
    });
  };

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new this.firebase.auth.GoogleAuthProvider())
      .then(res => {
        const user = new User(res.user.uid, res.user.displayName);
        this.user = user;
        this.localStorage.setItem('user', user).subscribe(() => { });
      });
  }

  signInWithTwitter() {
    this.afAuth.auth
      .signInWithPopup(new this.firebase.auth.TwitterAuthProvider())
      .then(res => {
        const user = new User(res.user.uid, res.user.displayName);
        this.user = user;
        this.localStorage.setItem('user', user).subscribe(() => { });
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.localStorage.removeItem('user').subscribe(() => { });
    this.user = null;
  }

}
