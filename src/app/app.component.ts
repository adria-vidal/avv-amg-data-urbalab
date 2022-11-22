import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avv-amg-data-urbalab';
  @ViewChild('selector1') selector1: any;
  fixSelector1(valor: number){
      this.selector1.fix(valor);
  }

}
