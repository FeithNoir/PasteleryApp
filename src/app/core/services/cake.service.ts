import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { Cake, CakeCategory } from '../interfaces/cake.interface';
import { CAKES_DATA } from '@core/data/app-data';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private _cakes = signal<Cake[]>([]);
  public cakes = this._cakes.asReadonly();

  private _loading = signal<boolean>(false);
  public loading = this._loading.asReadonly();

  private allCakes: Cake[] = CAKES_DATA;

  getCakes(): void {
    this._loading.set(true);
    of(this.allCakes).pipe(
      delay(1500),
      finalize(() => this._loading.set(false))
    ).subscribe(cakes => {
      this._cakes.set(cakes);
    });
  }

  getCakeById(id: number): Observable<Cake | undefined> {
    const cake = this.allCakes.find(c => c.id === id);
    return of(cake);
  }

  getCategories(): CakeCategory[] {
    return ['Pastel', 'Cheesecake', 'Especial'];
  }
}
