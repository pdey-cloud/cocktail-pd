import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../cocktail.interface';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-cocktailDetail',
  templateUrl: './cocktailDetail.component.html',
  styleUrls: ['./cocktailDetail.component.css'],
  imports: [RouterModule, CommonModule],
  standalone: true
})
export class CocktailDetailComponent {
  cocktailId: string | null;
  cocktails: Cocktail;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private favouriteService: FavouriteService){}
 
  ngOnInit(){
     
    this.cocktailId = this.route.snapshot.paramMap.get('id');
    this.getCocktailDetail();
  }
  getCocktailDetail() {
     this.http.get<Cocktail[]>('/cockails').subscribe(response => {
      this.cocktails = response.filter(items => items.id == this.cocktailId)[0];
    });
   }
   isFavourite(cocktailID: string) : boolean {
    return this.favouriteService.isFavourite(cocktailID)
   }
   toggleFavourite(cocktailID:string){
      this.favouriteService.toggleFavourite(cocktailID);
   }
  goBack(){
    this.router.navigate(['/']);
  }

}
