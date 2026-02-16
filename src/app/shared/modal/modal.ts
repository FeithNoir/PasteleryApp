import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { Cake } from '@core/interfaces/cake.interface';

@Component({
    selector: 'shared-modal',
    templateUrl: './modal.html',
    styleUrl: './modal.css',
})
export default class Modal {
    private router = inject(Router);
    public cake = input.required<Cake>();
    public close = output<void>();

    continueShopping() {
        this.close.emit();
    }

    goToCheckout() {
        this.close.emit();
        this.router.navigate(['/payment']);
    }
}
