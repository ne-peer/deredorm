import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../../../../services/web/auth-guard.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { User } from '../../../../models/store/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthGuardService]
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor(private authGuard: AuthGuardService, private acRouter: ActivatedRoute,
    private router: Router, protected localStorage: LocalStorage) { }

  ngOnInit() {
    const loggedIn: boolean = this.authGuard.canActivate(this.acRouter.snapshot, this.router.routerState.snapshot);

    this.localStorage.getItem('user').subscribe(user => this.user = user);
  }

}
