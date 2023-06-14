import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  canActivate() {
    if (this.userService.checkLoggedIn()) {
      return this.router.navigate(['/home/user-dashboard']);
    }
    return this.router.navigate(['/login']);
  }

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}
}
