import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailI } from '../../interface/pokemon-interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private id: number;
  public detailPokemon: DetailI
  public imgPokemon: string = "";

  constructor(private pokemonService: PokemonService, private routerActive: ActivatedRoute, private router: Router) {
    this.id = this.routerActive.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.loadDetailPokemon();
  }

  loadDetailPokemon() {
    this.pokemonService.getDetailPokemon(this.id).subscribe(data => {
      this.detailPokemon = data;
      this.imgPokemon = this.detailPokemon.sprites.other.dream_world.front_default;
    });
  }

  inPokemon() {
    this.router.navigate(["pagePokemon"]);
  }

}
