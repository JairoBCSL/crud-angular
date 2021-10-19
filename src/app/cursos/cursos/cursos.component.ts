import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Curso } from '../model/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Observable<Curso[]>;
  //cursos: Curso[] = [];
  displayedColumns = ['name', 'category']

  constructor(private cursosService: CursoService) {
    this.cursos = this.cursosService.list();

    //this.cursosService.list().subscribe(cursos => this.cursos = cursos);
  }

  ngOnInit(): void {
  }

}
