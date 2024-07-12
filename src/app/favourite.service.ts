import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.interface';

@Injectable({
  providedIn: 'root'
})

export class FavouriteService {
  private favouriteCocktailKey = 'favouriteCocktails';
  private cocktailFav: Set<string>;

  constructor () {
    this.loadFavouritesCocktails();
  }

  private loadFavouritesCocktails(): void {
    const favourites = localStorage.getItem(this.favouriteCocktailKey);
    this.cocktailFav = favourites ? new Set(JSON.parse(favourites)): new Set();
  }
  private storeFavouriteCocktails(): void {
    localStorage.setItem(this.favouriteCocktailKey,
    JSON.stringify(Array.from(this.cocktailFav)));

  }
   getFavouriteCocktail(): Set<string> {
    return this.cocktailFav;
  }
  isFavourite (cocktailId: string): boolean {
    return this.cocktailFav.has(cocktailId);
  }
  toggleFavourite(cocktailId: string): void {
    if(this.cocktailFav.has(cocktailId)){
      this.cocktailFav.delete(cocktailId);
    } else{
      this.cocktailFav.add(cocktailId);
    }
    this.storeFavouriteCocktails();
  }

}
