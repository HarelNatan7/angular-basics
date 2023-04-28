import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  editItem = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('pizza', 5)
  ]

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice()
  }

  getIngredient(idx: number): Ingredient {
    return this.ingredients[idx]
  }

  addIngridient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient)
    this.ingChanged.next(this.ingredients.slice())
  }

  updateIngredient(idx: number, newIngredient: Ingredient): void {
    this.ingredients[idx] = newIngredient
    this.ingChanged.next(this.ingredients.slice())
  }

  deleteIngredient(idx: number): void {
    this.ingredients.splice(idx, 1)
    this.ingChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients)
    this.ingChanged.next(this.ingredients.slice())
  }
}
