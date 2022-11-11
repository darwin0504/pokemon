import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { PokemonI } from '../../interface/pokemon-interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public listPokemon: PokemonI;

  constructor(private pokemonService: PokemonService, private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokemonService.getPokemon().subscribe(data => {
      this.listPokemon = data;
      console.log(this.listPokemon.results);
    });
  }

  routeDetailPokemon(index: number) {
    const id = index + 1;
    this.router.navigate(["detailPokemon/" + id]);
  }

  logout() {
    this.authorizationService.logout()
      .then(response => {
        this.router.navigate(["login"]);
      })
      .catch(error => { console.log(error) });
  }

}
