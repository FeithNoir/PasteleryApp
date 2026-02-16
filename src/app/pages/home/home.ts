import { Component, inject } from '@angular/core';
import { CakeService } from '@core/services/cake.service';
import { Card } from "@shared/card/card";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private route = inject(ActivatedRoute);
  private cakeService = inject(CakeService);

  cakes = this.cakeService.cakes;
  loading = this.cakeService.loading;

  constructor() {
    this.cakeService.getCakes();
  }

  public cake = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.cakeService.getCakeById(id))
    )
  );
}
