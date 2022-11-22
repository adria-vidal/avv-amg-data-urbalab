import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'avv-amg-data-urbalab';

  articulos: Array<any> = [
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 10.25,
    },
    {
      codigo: 2,
      descripcion: 'manzana',
      precio: 12.1,
    },
    {
      codigo: 3,
      descripcion: 'melon',
      precio: 52.3,
    },
    {
      codigo: 4,
      descripcion: 'cebolla',
      precio: 17,
    },
    {
      codigo: 5,
      descripcion: 'calabaza',
      precio: 20,
    }
  ];

  @ViewChild('selector1') selector1: any;
  fixSelector1(valor: number) {
    this.selector1.fix(valor);
  }
}
