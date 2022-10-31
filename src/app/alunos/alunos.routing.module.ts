import { AlunosDeactiveGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from '../alunos/guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children: [
      // { path: 'novo', component: AlunoFormComponent},
         { path: ':id', component: AlunoDetalheComponent,
          resolve: { aluno : AlunoDetalheResolver }
        },
         { path: ':id/edit', component: AlunoFormComponent,
          canDeactivate: [AlunosDeactiveGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
