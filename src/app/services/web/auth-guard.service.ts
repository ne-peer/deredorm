import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, protected localStorage: AsyncLocalStorage) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/oauth'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
