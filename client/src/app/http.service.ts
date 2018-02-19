import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getability();
    this.withSameAbility();
}
getPokemon(){
  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasaur.subscribe(data => console.log("Got our pokemon!", data.name));
}

getability(){
  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasaur.subscribe(data => console.log("Bulbasaur's abilities are " + data.abilities[0].ability.name + " and " + data.abilities[1].ability.name + "."));
}

withSameAbility(){

  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/ability/65/');
    bulbasaur.subscribe(data => console.log(data.pokemon.length + " Pokemon have the overgrow ability."));
}
}
