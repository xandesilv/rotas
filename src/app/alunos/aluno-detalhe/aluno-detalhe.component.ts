import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  aluno: Aluno;




  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router) {


     }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   this.id = params['id'];
    //   this.aluno = this.alunosService.getAluno(this.id);
    // } );
    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo o obj Aluno do Resolver')
        this.aluno = info['aluno'];
      }
    );


  }


  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id , 'edit']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

