import { Component, OnInit} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavouriteService } from '../favourite.service';
import { Cocktail } from '../cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
  imports: [RouterModule, CommonModule,FormsModule],
  standalone: true
})    
export class CocktailListComponent implements OnInit{
  cocktails: Cocktail[];
  searchList: string = '';
  cocktailList:Cocktail[];
  constructor(private http: HttpClient, private router: Router, private favouriteService: FavouriteService){}

  ngOnInit() {
    this.cocktails = this.favouriteService.getFavouriteCocktail();
    this.getCocktailsList();
  }
  getCocktailsList() {
     this.http.get<Cocktail[]>('/cockails').subscribe(response => {
      this.cocktails = response;
      this.cocktailList = this.cocktails;
    });
   }
   isFavourite(cocktailID: string) : boolean {
    return this.favouriteService.isFavourite(cocktailID)
   }
   toggleFavourite(cocktailID:string){
      this.favouriteService.toggleFavourite(cocktailID);
   }

   filterCocktails(): void{
     if (this.searchList.trim() !== ''){
       this.cocktails = this.cocktails.filter(cocktailItem =>
         cocktailItem.name.toLowerCase().includes(this.searchList.toLowerCase())
         );
      } else {
        this.cocktails = this.cocktailList;
      }
    }
   }
