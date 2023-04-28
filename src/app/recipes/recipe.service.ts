import { Injectable } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('First', 'test', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=0.4444444444444445xw:1xh;center,top&resize=640:*',
      [new Ingredient('Meat', 5), new Ingredient('Fries', 15)]),
    new Recipe('Sec', 'test', 'https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-puppy-chow-recipe-mudddy-buddies-6.jpg',
      [new Ingredient('Sause', 7), new Ingredient('Chicken', 1)])]

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  getReciepe(idx: number): Recipe {
    return this.recipes[idx]
  }
}
