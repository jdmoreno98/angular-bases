import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  // * El @Output lo que hace es mandarle al padre el evento y el tipo de dato que nosotros le digamos (ya que EventEmitter es un generico)
  // * Actualmente onNewCharacter es una variable y más tarde lo único que tenemos que hacer es "emitir" esa variable, es decir mandarla hacia afuera.
  // * Si quisieramos ponerle un nombre diferente a la variable para referirnos haríamos @Output('nombreVariable')

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  // * Personaje al que está bindeado en el addComponent.html
  public character : Character = {
    name:'',
    power:0
  };

  // * Método que se llamará al hacer el  ngSubmit
  emitCharacter():void{

    if( this.character.name.length === 0 ) return;

    //  this.onNewCharacter.emit(this.character);
    // ! * Esto tiene que ir así, porque si no pilla la referencia del objeto y al modificarlo en uno se modifica en todos los que hayamos añadido a la lista
    // ! * Al hacer esto es como si hicieramos un new y no coge la referencia. Así cada objeto es independiente
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0


  }

}
