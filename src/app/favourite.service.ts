import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.interface';

@Injectable({
  providedIn: 'root'
})

export class FavouriteService {
  private favouriteCocktail: Cocktail[];
  private cocktailFav: Set<string> = new Set();

    getFavouriteCocktail(): Cocktail[] {
      return this.favouriteCocktail;
    }
    isFavourite (cocktailId: string): boolean {
      return this.cocktailFav.has(cocktailId);
    }
    toggleFavourite(cocktailId: string) {
      if(this.cocktailFav.has(cocktailId)){
        this.cocktailFav.delete(cocktailId);
      } else{
        this.cocktailFav.add(cocktailId);
      }
    }
  }