import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';


// * Este decorador en particular lo que hace es decirle a Angular que es un servicio y que lo trate como tal.
// * La propiedad providedIn: root --> lo que nos evita es tener que definir los servicios en la parte de los providers del app.module.ts
// * Lo que hace esta propiedad es que nuestro servicio va a ser un Singleton, es decir,
// *  no importa en cuantos lugares utilice este servicio siempre que lo haga mediante inyección de dependencias


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [{
    name:'Krillin',
    power: 1000
  },{
    name:'Goku',
    power:4444
  },{
    name:'Vegeta',
    power:999
  }];

  onNewCharacterMain(character : Character):void{
      this.characters.push(character);
  }

  onDeleteCharacterMain(index :number):void{
    console.log('EVENTOOO'+index);
    this.characters.splice(index,1);
  //  this.characters.splice(index);
  }
}
