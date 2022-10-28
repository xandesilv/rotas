import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosComponent } from './cursos/cursos.component';


const appRoutes: Routes = [
  { path: 'cursos', loadChildren: () => import('../app/cursos/cursos.module').then(x => x.CursosModule)},
 // { path: 'cursos', component: CursosComponent},
 // { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'alunos', loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule )}
 // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
