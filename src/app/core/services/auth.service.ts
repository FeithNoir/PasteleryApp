import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  public currentUser = signal<User | null>(null);
  public isAuthenticated = signal(false);

  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.currentUser.set(JSON.parse(savedUser));
      this.isAuthenticated.set(true);
    }
  }

  login(credentials: any): boolean {
    if (credentials.email && credentials.password) {
      const mockUser: User = {
        name: credentials.email.split('@')[0],
        email: credentials.email
      };
      localStorage.setItem('user', JSON.stringify(mockUser));
      this.currentUser.set(mockUser);
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
}
