import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

interface NavLink {
  label: string;
  route: string;
  fragment?: string;
  adminOnly?: boolean;
  sublinks?: NavSublink[];
  icon?: string;
}

interface NavSublink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent {
  links: NavLink[] = [
    { label: 'Home', route: '/', fragment: 'home' },
    { label: 'Features', route: '/', fragment: 'features' },
    { 
      label: 'Pricing', 
      route: '/',
      fragment: 'pricing',
      sublinks: [
        { label: 'Individual', route: '/#pricing-individual' },
        { label: 'Schools', route: '/#pricing-schools' },
        { label: 'Colleges', route: '/#pricing-colleges' },
      ]
    },
    { label: 'Wallet', route: '/wallet' },
    { label: 'Admin', route: '/admin', adminOnly: true }
  ];

  mobileLinks: NavLink[] = [
    { label: 'Home', route: '/', icon: '🏠' },
    { label: 'Learning', route: '/learning', icon: '🎓' },
    { label: 'Community', route: '/community', icon: '👥' },
    { label: 'Wallet', route: '/wallet', icon: '💰' },
    { label: 'Profile', route: '/profile', icon: '👤' }
  ];

  mobileMenuOpen = false;
  scrolled = false;
  openDropdown: string | null = null;

  theme: 'light' | 'dark' = 'dark';

  constructor(public auth: AuthService, private router: Router, private themeService: ThemeService) {
    this.themeService.themeChanges().subscribe(t => this.theme = t);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  @HostListener('window:scroll') onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    // Prevent body scroll when mobile menu is open
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navigate(link: NavLink, event: Event): void {
    event.preventDefault();

    if (link.adminOnly && !this.auth.isAdmin()) {
      return;
    }

    const targetUrl = link.route;
    const currentUrl = this.router.url.split('#')[0];

    // Close mobile menu first
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    }

    if (currentUrl === targetUrl) {
      if (link.fragment) {
        this.scrollToFragment(link.fragment);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      this.router.navigate([targetUrl]).then(() => {
        if (link.fragment) {
          setTimeout(() => this.scrollToFragment(link.fragment!), 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  private scrollToFragment(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  toggleTheme(): void {
    //this.themeService.toggleTheme();
  }

  toggleDropdown(label: string, event: Event): void {
    event.stopPropagation();
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  navigateToSublink(sublink: NavSublink, event: Event): void {
    event.preventDefault();
    
    if (sublink.route.includes('#')) {
      const [path, fragment] = sublink.route.split('#');
      const targetPath = path || '/';
      const currentPath = this.router.url.split('#')[0];
      
      if (currentPath === targetPath) {
        this.scrollToFragment(fragment);
      } else {
        this.router.navigate([targetPath]).then(() => {
          setTimeout(() => this.scrollToFragment(fragment), 100);
        });
      }
    } else {
      this.router.navigate([sublink.route]);
    }
    
    this.openDropdown = null;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = '';
      this.mobileMenuOpen = false;
    }
  }

  @HostListener('document:click')
  closeDropdown(): void {
    this.openDropdown = null;
  }
}
