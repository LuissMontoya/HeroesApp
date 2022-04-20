import { Heroe } from './../../interfaces/heroes.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: []
})
export class HeroeTarjetaComponent  {

  @Input() heroe!: Heroe;
  //@Input() heroe: Heroe | undefined;

  constructor() { }



}
