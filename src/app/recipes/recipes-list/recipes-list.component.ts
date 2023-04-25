import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Output() selectedRecipeEl = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('First', 'test', 'url'),
    new Recipe('Sec', 'test', 'url')
  ]

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipeEl.emit(recipe)
  }
}
