import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';


@Injectable({
providedIn: 'root'
})
export class AdminGuardService {

  static canActivateFn(loginService: LoginService, router: Router): CanActivateFn {
    return (route, state) => {
      if (loginService.isLoggedIn() && loginService.getUserRole() === 'ADMIN') {
        return true;
      } else {
        router.navigate(['login']);
        return false;
      }
      }
  }
}
