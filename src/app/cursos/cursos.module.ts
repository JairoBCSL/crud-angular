import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRoutingModule,
  ],
  providers: []
})
export class CursosModule { }
