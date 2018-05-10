import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AuthGuardService implements CanActivate {

  private loggedIn: boolean;

  constructor(private router: Router, protected localStorage: LocalStorage) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.localStorage.getItem('user').subscribe(user => {
      if (user === null) {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/oauth'], { queryParams: { returnUrl: state.url } });
        this.loggedIn = false;
      }

      this.loggedIn = true;
    });

    return this.loggedIn;
  }

}
