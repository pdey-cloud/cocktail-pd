import { Routes } from '@angular/router';
import { CocktailListComponent } from './CocktailList/cocktail-list.component';
import { CocktailDetailComponent } from './CocktailDetail/cocktailDetail.component';

export const routes: Routes = [
	{path:'', component: CocktailListComponent},
	{path:'cocktailDetail/:id', component: CocktailDetailComponent},
];

export class AppRoutingModule {

}
