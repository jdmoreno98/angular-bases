import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
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
}
