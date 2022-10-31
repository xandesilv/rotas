import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
  authService: any;
  router: any;

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean> | boolean{

      console.log('AlunosGuard: Guarda de rota filha');

      if(state.url.includes('edit')){
        //alert('Usuário sem acesso')
        //return of(false);
      }
      return true;
  }


}