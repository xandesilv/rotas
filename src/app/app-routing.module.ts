import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosComponent } from './cursos/cursos.component';


const appRoutes: Routes = [
  { path: 'cursos',
  loadChildren: () => import('../app/cursos/cursos.module').then(x => x.CursosModule),
  canActivate: [AuthGuard],
  canActivateChild: [CursosGuard],
  canLoad: [AuthGuard]
},
  { path: 'alunos',
  loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule ),
   canActivate: [AuthGuard],
   canLoad: [AuthGuard]

},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,
  canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'cursos', component: CursosComponent},
 // { path: 'curso/:id', component: CursoDetalheComponent},
 // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent}
 { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
