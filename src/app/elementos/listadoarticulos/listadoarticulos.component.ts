import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css'],
})
export class ListadoarticulosComponent implements OnInit {
  @Input() articulos: any;

  ngOnInit() {}

  delete(){}
  modify(){}
  add(){}
  select(){}
}
