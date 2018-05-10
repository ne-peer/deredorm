import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { User } from '../../models/store/user';

@Injectable()
export class AuthGuardService implements CanActivate {

  private user: User;

  constructor(private router: Router, protected localStorage: LocalStorage) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.localStorage.getItem('user')) {
      (async () => {
        this.localStorage.getItem('user').subscribe(user => this.user);
        await console.log(this.user);
        return await true;
      })();
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/oauth'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
