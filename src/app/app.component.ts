import { Component } from '@angular/core';

// ! Este archivo es el que explica como fnciona el componente, que dependencias tiene... este es el archivo importante
// ! Aquí vemos que  html y css utiliza el componente
// ! Podriamos añadir todos los css que queramos ya que es un array
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// ! Casi todo en angular son clases
// Vamos a cambiar el titulo
export class AppComponent {
 // Original title = 'bases';
 title : string = 'Mi primera chamba con angular';

}

