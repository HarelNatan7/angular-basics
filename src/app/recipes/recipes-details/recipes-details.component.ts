import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id']
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getReciepe(this.id)
      }
    )
  }

  onEditRecipe(): void {
    // this.router.navigate(['edit'], {relativeTo: this.route})
    this.router.navigate(['../', [this.id], 'edit'], { relativeTo: this.route })
  }

  onAddToShoppingList(): void {
    this.slService.addIngredients(this.recipe.ingredients)
  }
}
