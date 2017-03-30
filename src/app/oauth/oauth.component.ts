import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  user = {};
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        console.log(this.user);
      }
      else {
        this.user = {};
      }
    });
  }

  login(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from)
    });
  }

  logout() {
    this.af.auth.logout();
  }

  private _getProvider(from: string) {
    switch(from){
      case 'twitter': return AuthProviders.Twitter;
      case 'google': return AuthProviders.Google;
    }
  }

  ngOnInit() {
  };

}
