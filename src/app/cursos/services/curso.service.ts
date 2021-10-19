import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { first, tap } from 'rxjs/operators'

import { Curso } from '../model/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first(),
        tap(cursos => console.log(cursos))
      );
  }
}
