import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  //FUNCIONES PARA TRAERNOS DATOS DEL PADRE
  @Input() min: any;
  @Input() max: any;

  actual: any;

  constructor() {}

  ngOnInit(): void {
    this.actual = this.min;
  }

  increment() {
    if (this.actual < this.max) {
      this.actual++;
    }
  }
  decrement() {
    if (this.actual > this.min) {
      this.actual--;
    }
  }

  fix(current: number) {
    if (this.actual >= this.min && this.actual <= this.max) {
      this.actual = current;
    }
  }
}
