import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public nombre: string = 'ironman';
public edad: number = 22;
public mostrarBoton: boolean = false;

// Los getters se utilizan como atrributos a la hora de llamarlos en el HTML
get capitalizedName(): string{
  return this.nombre.toUpperCase();
}

getHeroDescription(): string {
  return `${this.nombre} - ${this.edad}`;
}


changeHero(): void{
  this.nombre = 'Spiderman';
}

changeEdad():void{
  this.edad = 25;
}

reset():void{
  this.nombre = 'ironman';
  this.edad = 45;

}



}


