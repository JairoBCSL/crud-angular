import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }

  list() :Curso[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'},
      { _id: '2', name: 'React', category: 'front-end'},
      { _id: '3', name: 'Spring', category: 'back-end'},
    ]
  }
}
