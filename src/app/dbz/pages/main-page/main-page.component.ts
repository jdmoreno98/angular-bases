import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  // ! Inyección de dependencias
  //* Con esto habilitamos toda la inforamción que estemos utilizando en el servicio


  // * Buenas prácticas es hacer los servicios privados, una de las razones es porque si importamos el mainPageComponent también expondríamos al servicio ya que sería public
  constructor(private dbzService: DbzService){
  }


  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacterService(character: Character):void{
    this.dbzService.onNewCharacterMain(character);
  }



}
