import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  user = {};
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(from: string) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  };

}
