import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter: number = 0;

increaseBy() : void {
  this.counter++;
}

decreaseBy(value: number) : void {
  this.counter-= value;
}

reset(): void{
  this.counter = 0;
}

}
