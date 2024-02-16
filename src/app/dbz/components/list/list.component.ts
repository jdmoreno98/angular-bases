import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  /*
   * Este characterList lo vamos a utilizar en este propio componente list.component.html
   * Podría llamarse exactamente igual que en la propiedad definida en el main-page.component.ts porque el scope de la variable es por clase
   ! Lo que necesitamos es que desde el padre (MainPage ya que es quien contiene el <app-dbz-list>) nos llegue el listado de personajes a esta clase.
   ! Para permitir esta comunicación, la propiedad que deseemos recibir va a tener el decorador @Input.
   ! Lo que significa esto es que este componente  va o PUEDE recibir una propiedad llamada (en este caso ) characterList
   * Para cambiarle el nombre de la propiedad @Input('nombre a usar en el mundo exterior')
   ! Tras esto, si nos vamos al main-page.html podemos observar que utilizando [nombrePropiedadConElDecoradorInput] podemos seleccionar la propiedad definida en el padre
    * <app-dbz-list [characterList]="characters"></app-dbz-list>
   */

   @Input()
  public characterList : Character[] = [{
    id:v4(),
    name:'Trunks',
    power: 2
  }];


  @Output()
  public deletedCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string):void{
    console.log("hola");
    this.deletedCharacter.emit(id);
  }
}
