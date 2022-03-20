/* Directiva Generada */

// agregamos el ElementRef, el HostListener y el Input (son propiedades de Angular)
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({

  // nombre con el cuál llamaremos a la directiva desde el html
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // inyectamos el ElementRef
  constructor( private el: ElementRef ) { 

    console.log("Directiva llamada");
  }

  // llamamos al Input
  @Input("appResaltado") nuevoColor:string | undefined;

  // llamamos al HostListener (evento que queremos escuchar) 
  @HostListener('mouseenter') mouseEntro() {

    this.resaltar( this.nuevoColor || 'yellow' );

  }
  
  @HostListener('mouseleave') mouseSalio() {

    this.resaltar("");

  }

  // método privada que sólo será usada por la directiva Input
  private resaltar( color:string ) {

    this.el.nativeElement.style.backgroundColor = color;
  }

}
