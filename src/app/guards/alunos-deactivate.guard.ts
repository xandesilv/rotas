import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,  CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactiveGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean> | boolean{
      console.log('funcionado');



     // return  component.podeMudarRota ? component.podeMudarRota(): true;
     return component.podeDesativar();
  }


}