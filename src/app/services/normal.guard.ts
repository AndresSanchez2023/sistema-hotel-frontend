import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';


@Injectable({
providedIn: 'root'
})
export class NormalGuardService {

  constructor(private loginService:LoginService,private router:Router){}

  canActivate(): CanActivateFn{
      return (route, state) => {
        if(this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'NORMAL'){
          return true;
        }else{
          this.router.navigate(['login']);
          return false;
        }
      }
  }
}
