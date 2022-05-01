import { HeroesService } from './../../services/heroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width:100%;
      border-radius: 10px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router) { }

  heroe!: Heroe;


  ngOnInit(): void {
    this.activateRoute.params
    .pipe(switchMap( ({ id }) => this.heroeService.getHeroebyId(id)))
    .subscribe( ( heroe ) => this.heroe= heroe)
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }


}
