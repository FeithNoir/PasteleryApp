import { CommonModule, formatDate } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient, IngredientStatus, IngredientUnit } from '@core/interfaces/ingredient.interface';
import { InventoryService } from '@core/services/inventory.service';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
  private readonly inventoryService = inject(InventoryService);
  private readonly fb = inject(FormBuilder);

  public ingredients = this.inventoryService.ingredients;
  public loading = this.inventoryService.loading;
  public isFormVisible = signal(false);
  public editingIngredient = signal<Ingredient | null>(null);

  public ingredientForm = this.fb.group({
    id: [null as string | null],
    name: ['', Validators.required],
    brand: [''],
    status: ['sin empezar' as IngredientStatus, Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    unit: ['kg' as IngredientUnit, Validators.required],
    expiryDate: ['', Validators.required],
  });

  ngOnInit() { }

  addIngredient() {
    this.editingIngredient.set(null);
    this.ingredientForm.reset({
      status: 'sin empezar',
      unit: 'kg',
      price: 0
    });
    this.isFormVisible.set(true);
  }

  editIngredient(ingredient: Ingredient) {
    this.editingIngredient.set(ingredient);

    // Format date to 'yyyy-MM-dd' for the date input
    const ingredientForForm = {
      ...ingredient,
      expiryDate: ingredient.expiryDate ? formatDate(ingredient.expiryDate, 'yyyy-MM-dd', 'en-US') : ''
    };

    this.ingredientForm.patchValue(ingredientForForm);
    this.isFormVisible.set(true);
  }

  closeForm() {
    this.isFormVisible.set(false);
    this.editingIngredient.set(null);
  }

  saveIngredient(ingredientData: any) {
    if (this.ingredientForm.invalid) return;

    const data = {
      ...ingredientData,
      expiryDate: new Date(ingredientData.expiryDate),
      price: Number(ingredientData.price)
    };

    const currentIngredient = this.editingIngredient();
    if (currentIngredient) {
      // Update existing ingredient
      const updatedIngredient: Ingredient = {
        ...currentIngredient,
        ...data,
      };
      this.inventoryService.updateIngredient(updatedIngredient);
    } else {
      // Add new ingredient
      const { id, ...newIngredientData } = data;
      this.inventoryService.addIngredient(newIngredientData as Omit<Ingredient, 'id'>);
    }
    this.closeForm();
  }

  deleteIngredient(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este ingrediente?')) {
      this.inventoryService.deleteIngredient(id);
    }
  }
}
