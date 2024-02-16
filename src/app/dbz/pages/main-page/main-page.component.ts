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
  constructor(public dbzService: DbzService){
  }

}
