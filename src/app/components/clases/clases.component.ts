/* Componente Generado */

import { Component, OnInit } from '@angular/core';

@Component({

  // nombre con el que llamaremos al componente desde el HTML.
  selector: 'app-clases',

  // como en este componente se utiliza demasiado código HTML en vez de usar el "template" se redirige a un HTML (clases.component.html)
  templateUrl: './clases.component.html',

  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  // (A) creamos una variable que llamaremos desde el html de la clase
  alerta:string = "alert-danger";

  // (B) creamos un objeto para el condicional booleano que llamaremos desde el html de la clase
  propiedades:any = {
    danger: false
  }

  // (C) creamos una variable booleana para el botón guardar
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // (C) creamos un método para pasar a "true" la variable "loadin" del botón guardar
  ejecutar() {

   this.loading = true; 

   // y a los 3 segundos retorna a "false"
   setTimeout( ()=> this.loading = false, 3000 )
  }

}
