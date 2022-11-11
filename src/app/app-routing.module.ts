import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { PokemonDetailComponent } from './page-pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './page-pokemon/pokemon/pokemon.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  // login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // sign-in
  { path: 'sign-in', component: SignInComponent },

  //page pokemon
  { path: 'pagePokemon', redirectTo: 'pagePokemon', pathMatch: 'full' },
  { path: 'pagePokemon', component: PokemonComponent, ...canActivate(() => redirectUnauthorizedTo(["login"])) },


  //detail pokemon
  { path: 'pagePokemon', redirectTo: 'detailPokemon/:id', pathMatch: 'full' },
  { path: 'detailPokemon/:id', component: PokemonDetailComponent, ...canActivate(() => redirectUnauthorizedTo(["login"])) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
