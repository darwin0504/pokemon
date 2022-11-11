import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DetailI, PokemonI } from '../interface/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get<PokemonI>("https://pokeapi.co/api/v2/pokemon/")
  }

  getDetailPokemon(id: number) {
    return this.http.get<DetailI>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  }

}
