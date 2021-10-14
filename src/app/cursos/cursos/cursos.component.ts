import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['name', 'category']

  constructor(private cursosService: CursoService) {
    this.cursos = cursosService.list();
  }

  ngOnInit(): void {
  }

}
