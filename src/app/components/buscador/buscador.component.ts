import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../servicios/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor( private _heroesService:HeroesService,
               private _router:Router, 
               private _activatedRoute:ActivatedRoute) { 
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }

}
