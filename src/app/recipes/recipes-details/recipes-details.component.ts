import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {
  @Input() recipe: Recipe;
  // @Output() addToShoppingList = new EventEmitter<Ingredient[]>();

  constructor(private slService: ShoppingListService) {}
  onAddToShoppingList(): void {
    // this.addToShoppingList.emit(this.recipe.ingredients)
    this.slService.addIngredients(this.recipe.ingredients)
  }
}
