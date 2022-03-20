/* Componente Generado */

import { Component, OnInit } from '@angular/core';

@Component({

  // nombre con el que llamaremos al componente desde el HTML.
  selector: 'app-css',
  template: `
  <h3>2) <u>CSS (a un sólo componente)</u></h3>
    <p>
      esta es una etiqueta con estilo propio del componente
    </p>
  `,

  // aquí se definen estilos que sólo se aplicarán sólo a este componente
  styles: [ `

  p{
    color: red;
    font-size: 30px;
  }
  `,
]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
