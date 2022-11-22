import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';

@NgModule({
  declarations: [ContadorComponent, ListadoarticulosComponent],
  imports: [CommonModule],
  exports: [ContadorComponent, ListadoarticulosComponent],
})
export class ElementosModule {}
