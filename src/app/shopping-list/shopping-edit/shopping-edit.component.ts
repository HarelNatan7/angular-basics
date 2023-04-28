import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItem: Ingredient;
  editedItemIdx: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.editItem.subscribe(
      (idx: number) => {
        this.editMode = true
        this.editedItemIdx = idx
        this.editedItem = this.slService.getIngredient(idx)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const { value } = form
    const newIngredient: Ingredient = {
      name: value.name,
      amount: value.amount
    }
    if (this.editMode) this.slService.updateIngredient(this.editedItemIdx, newIngredient)
    else this.slService.addIngridient(newIngredient)
    this.editMode = false
    form.reset()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
