import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  enrolledCourses: string[];
  walletBalance: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);

  currentUser$ = this.currentUserSubject.asObservable();
  isLoggedIn$ = this.currentUserSubject.asObservable().pipe(
    tap(user => console.log('Auth state changed:', !!user))
  );

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const token = localStorage.getItem('vreal_token');
    const userData = localStorage.getItem('vreal_user');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        this.tokenSubject.next(token);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        this.logout();
      }
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'admin@vrealentish.com',
        name: 'Admin User',
        avatar: '/avatars/admin.jpg',
        role: 'admin',
        enrolledCourses: ['course-1', 'course-2'],
        walletBalance: 500
      },
      {
        id: '2',
        email: 'user@example.com',
        name: 'John Doe',
        avatar: '/avatars/user.jpg',
        role: 'user',
        enrolledCourses: ['course-1'],
        walletBalance: 150
      }
    ];

    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const token = `mock_jwt_token_${user.id}_${Date.now()}`;
    const response: AuthResponse = { token, user };

    return of(response).pipe(
      delay(1000), // Simulate network delay
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('vreal_token', response.token);
          localStorage.setItem('vreal_user', JSON.stringify(response.user));
        }
        this.tokenSubject.next(response.token);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  register(data: RegisterRequest): Observable<AuthResponse> {
    const newUser: User = {
      id: `user_${Date.now()}`,
      email: data.email,
      name: data.name,
      role: 'user',
      enrolledCourses: [],
      walletBalance: 100 // Welcome bonus
    };

    const token = `mock_jwt_token_${newUser.id}_${Date.now()}`;
    const response: AuthResponse = { token, user: newUser };

    return of(response).pipe(
      delay(1000),
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('vreal_token', response.token);
          localStorage.setItem('vreal_user', JSON.stringify(response.user));
        }
        this.tokenSubject.next(response.token);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('vreal_token');
      localStorage.removeItem('vreal_user');
    }
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }

  updateUser(updates: Partial<User>): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      localStorage.setItem('vreal_user', JSON.stringify(updatedUser));
      this.currentUserSubject.next(updatedUser);
    }
  }
}