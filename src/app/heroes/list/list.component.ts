import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
//* vamos a utilizar la directiva ngFor

public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
public deletedHeroe?:string;

removeLastHero():void{
  this.deletedHeroe = this.heroNames.pop();

}

}
