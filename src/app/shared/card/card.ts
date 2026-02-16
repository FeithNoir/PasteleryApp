import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cake } from '@core/interfaces/cake.interface';
import { CartService } from '@core/services/cart.service';
import Modal from '@shared/modal/modal';

@Component({
  selector: 'shared-card',
  imports: [CommonModule, RouterModule, NgOptimizedImage, Modal],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  cake = input.required<Cake>();
  private cartService = inject(CartService);
  showModal = signal(false);

  addToCart() {
    this.cartService.addToCart(this.cake());
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
