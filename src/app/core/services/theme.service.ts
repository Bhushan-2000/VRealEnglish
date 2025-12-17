import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type AppTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private theme$ = new BehaviorSubject<AppTheme>('light');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('app-theme') as AppTheme | null;
      if (stored === 'light' || stored === 'dark') {
        this.theme$.next(stored);
        this.applyThemeClass(stored);
      } else {
        this.applyThemeClass('light');
      }
    }
  }

  currentTheme() { return this.theme$.value; }
  themeChanges() { return this.theme$.asObservable(); }

  toggleTheme(): void {
    const next: AppTheme = this.theme$.value === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  setTheme(theme: AppTheme): void {
    this.theme$.next(theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app-theme', theme);
    }
    this.applyThemeClass(theme);
  }

  private applyThemeClass(theme: AppTheme) {
    if (!isPlatformBrowser(this.platformId)) return;
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
  }
}
