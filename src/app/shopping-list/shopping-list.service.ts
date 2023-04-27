import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('pizza', 5)
  ]

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice()
  }

  addIngridient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient)
    this.ingChanged.emit(this.ingredients.slice())
  }
  
  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients)
    this.ingChanged.emit(this.ingredients.slice())
  }
}
