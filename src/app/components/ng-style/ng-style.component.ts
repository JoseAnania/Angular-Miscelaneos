/* Componente Generado */

import { Component, OnInit } from '@angular/core';

@Component({
  
  // nombre con el que llamaremos al componente desde el HTML.
  selector: 'app-ng-style', 

  // aquí se puede realizar HTML que se mostrará cuando se llame el componente (usamos NG STYLE, propiedad de Angular).
  template: `
    <h3>1) <u>NG STYLE</u></h3>
    <p [style.fontSize.px]="tamano">
      Aumentar o Disminuir tamaño
    </p>
    <button style="margin: 10px" class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  // defino un tamaño de letra a usar en el "Template"
  tamano:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
