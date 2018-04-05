import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../../../services/web/auth-guard.service';

@Component({
  selector: 'app-exist',
  templateUrl: './exist.component.html',
  styleUrls: ['./exist.component.css'],
  providers: [AuthGuardService]
})
export class ExistComponent implements OnInit {

  constructor(private authGuard: AuthGuardService, private acRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authGuard.canActivate(this.acRouter.snapshot, this.router.routerState.snapshot);
  }

}
