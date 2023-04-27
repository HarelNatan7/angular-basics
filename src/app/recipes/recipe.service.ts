import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('First', 'test', 'url'),
    new Recipe('Sec', 'test', 'url')]

    recipeSelected = new EventEmitter<Recipe>();
    
  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }
}
