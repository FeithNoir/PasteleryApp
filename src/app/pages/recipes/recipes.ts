import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CakeService } from '@core/services/cake.service';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  public cakeService = inject(CakeService);
  public recipes = [
    { title: 'Masa Madre Básica', difficulty: 'Media', time: '24h' },
    { title: 'Tarta de Frutos Rojos', difficulty: 'Alta', time: '3h' },
    { title: 'Cheesecake Estilo NY', difficulty: 'Media', time: '2h' },
  ];
}
