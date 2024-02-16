import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';


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
    id:v4(),
    name:'Krillin',
    power: 1000
  },{
    id:v4(),
    name:'Goku',
    power:4444
  },{
    id:v4(),
    name:'Vegeta',
    power:999
  }];

  onNewCharacterMain(character : Character):void{
      character.id =  v4();
      this.characters.push(character);
  }

  /*
  onDeleteCharacterMain(index :number):void{
    console.log('EVENTOOO'+index);
    this.characters.splice(index,1);
  //  this.characters.splice(index);
  }*/

  // * Lo que hace esto es devolver un nuevo array con todos los elementos excepto el que tenga el id sobre el que hemos hecho click para 'eliminarlo'
  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
