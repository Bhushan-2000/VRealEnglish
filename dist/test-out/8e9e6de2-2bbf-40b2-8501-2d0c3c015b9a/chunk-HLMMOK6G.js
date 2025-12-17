import {
  Router,
  init_router
} from "./chunk-VTEW27YV.js";
import {
  init_common,
  isPlatformBrowser
} from "./chunk-2NDX233R.js";
import {
  BehaviorSubject,
  Component,
  HostListener,
  Inject,
  Injectable,
  PLATFORM_ID,
  __decorate,
  delay,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  of,
  tap
} from "./chunk-EI44HNNH.js";
import {
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// src/app/core/services/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/core/services/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_common();
    init_esm();
    init_operators();
    AuthService = class AuthService2 {
      platformId;
      currentUserSubject = new BehaviorSubject(null);
      tokenSubject = new BehaviorSubject(null);
      currentUser$ = this.currentUserSubject.asObservable();
      isLoggedIn$ = this.currentUserSubject.asObservable().pipe(tap((user) => console.log("Auth state changed:", !!user)));
      constructor(platformId) {
        this.platformId = platformId;
        this.initializeAuth();
      }
      initializeAuth() {
        if (!isPlatformBrowser(this.platformId)) {
          return;
        }
        const token = localStorage.getItem("vreal_token");
        const userData = localStorage.getItem("vreal_user");
        if (token && userData) {
          try {
            const user = JSON.parse(userData);
            this.tokenSubject.next(token);
            this.currentUserSubject.next(user);
          } catch (error) {
            console.error("Error parsing stored user data:", error);
            this.logout();
          }
        }
      }
      login(credentials) {
        const mockUsers = [
          {
            id: "1",
            email: "admin@vrealentish.com",
            name: "Admin User",
            avatar: "/avatars/admin.jpg",
            role: "admin",
            enrolledCourses: ["course-1", "course-2"],
            walletBalance: 500
          },
          {
            id: "2",
            email: "user@example.com",
            name: "John Doe",
            avatar: "/avatars/user.jpg",
            role: "user",
            enrolledCourses: ["course-1"],
            walletBalance: 150
          }
        ];
        const user = mockUsers.find((u) => u.email === credentials.email);
        if (!user) {
          throw new Error("Invalid credentials");
        }
        const token = `mock_jwt_token_${user.id}_${Date.now()}`;
        const response = { token, user };
        return of(response).pipe(
          delay(1e3),
          // Simulate network delay
          tap((response2) => {
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem("vreal_token", response2.token);
              localStorage.setItem("vreal_user", JSON.stringify(response2.user));
            }
            this.tokenSubject.next(response2.token);
            this.currentUserSubject.next(response2.user);
          })
        );
      }
      register(data) {
        const newUser = {
          id: `user_${Date.now()}`,
          email: data.email,
          name: data.name,
          role: "user",
          enrolledCourses: [],
          walletBalance: 100
          // Welcome bonus
        };
        const token = `mock_jwt_token_${newUser.id}_${Date.now()}`;
        const response = { token, user: newUser };
        return of(response).pipe(delay(1e3), tap((response2) => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem("vreal_token", response2.token);
            localStorage.setItem("vreal_user", JSON.stringify(response2.user));
          }
          this.tokenSubject.next(response2.token);
          this.currentUserSubject.next(response2.user);
        }));
      }
      logout() {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem("vreal_token");
          localStorage.removeItem("vreal_user");
        }
        this.tokenSubject.next(null);
        this.currentUserSubject.next(null);
      }
      getToken() {
        return this.tokenSubject.value;
      }
      getCurrentUser() {
        return this.currentUserSubject.value;
      }
      isAuthenticated() {
        return !!this.currentUserSubject.value;
      }
      isAdmin() {
        const user = this.getCurrentUser();
        return user?.role === "admin";
      }
      updateUser(updates) {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
          const updatedUser = __spreadValues(__spreadValues({}, currentUser), updates);
          localStorage.setItem("vreal_user", JSON.stringify(updatedUser));
          this.currentUserSubject.next(updatedUser);
        }
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
      ];
    };
    AuthService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthService);
  }
});

// src/app/core/services/theme.service.ts
var ThemeService;
var init_theme_service = __esm({
  "src/app/core/services/theme.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_common();
    init_esm();
    ThemeService = class ThemeService2 {
      platformId;
      theme$ = new BehaviorSubject("light");
      constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
          const stored = localStorage.getItem("app-theme");
          if (stored === "light" || stored === "dark") {
            this.theme$.next(stored);
            this.applyThemeClass(stored);
          } else {
            this.applyThemeClass("light");
          }
        }
      }
      currentTheme() {
        return this.theme$.value;
      }
      themeChanges() {
        return this.theme$.asObservable();
      }
      toggleTheme() {
        const next = this.theme$.value === "dark" ? "light" : "dark";
        this.setTheme(next);
      }
      setTheme(theme) {
        this.theme$.next(theme);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem("app-theme", theme);
        }
        this.applyThemeClass(theme);
      }
      applyThemeClass(theme) {
        if (!isPlatformBrowser(this.platformId))
          return;
        const body = document.body;
        body.classList.remove("light-theme", "dark-theme");
        body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
      ];
    };
    ThemeService = __decorate([
      Injectable({ providedIn: "root" })
    ], ThemeService);
  }
});

// angular:jit:template:src/app/shared/components/navbar/navbar.component.html
var navbar_component_default;
var init_navbar_component = __esm({
  "angular:jit:template:src/app/shared/components/navbar/navbar.component.html"() {
    navbar_component_default = `<nav class="navbar" [class.scrolled]="scrolled" role="navigation" aria-label="Main navigation">
  <div class="nav-inner container">
    <a class="logo" routerLink="/" aria-label="VReal English Home">
      <img src="/vreal-logo-digitized.png" alt="VReal English Logo" loading="eager" />
    </a>


    <button class="hamburger" (click)="toggleMobileMenu()" aria-label="Toggle navigation menu" aria-expanded="{{mobileMenuOpen}}">
      <span></span><span></span><span></span>
    </button>

    <ul class="nav-links" [class.open]="mobileMenuOpen">
      <li *ngFor="let link of links" 
          [class.admin]="link.adminOnly" 
          [class.hidden]="link.adminOnly && !auth.isAdmin()"
          [class.dropdown]="link.sublinks">
        <ng-container *ngIf="!link.adminOnly || auth.isAdmin()">
          <!-- Dropdown link -->
          <a *ngIf="link.sublinks" 
             href="javascript:void(0)" 
             (click)="toggleDropdown(link.label, $event)"
             [attr.aria-label]="link.label"
             [class.active]="openDropdown === link.label"
             tabindex="0">
            {{ link.label }}
            <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <!-- Regular link -->
          <a *ngIf="!link.sublinks" 
             href="{{link.route}}" 
             (click)="navigate(link, $event)" 
             [attr.aria-label]="link.label" 
             tabindex="0">
            {{ link.label }}
          </a>
          <!-- Dropdown menu -->
          <ul *ngIf="link.sublinks && openDropdown === link.label" class="dropdown-menu">
            <li *ngFor="let sublink of link.sublinks">
              <a href="{{sublink.route}}" 
                 (click)="navigateToSublink(sublink, $event)"
                 [attr.aria-label]="sublink.label"
                 tabindex="0">
                {{ sublink.label }}
              </a>
            </li>
          </ul>
        </ng-container>
      </li>
      <li *ngIf="auth.isAuthenticated()" class="profile">
        <button class="avatar" (click)="logout()" aria-label="Logout">Logout</button>
      </li>
      <li class="theme-toggle">
        <button (click)="toggleTheme()" aria-label="Toggle dark / light mode" [attr.data-theme]="theme">
          <span *ngIf="theme==='dark'">\u{1F319} Dark</span>
          <span *ngIf="theme==='light'">\u2600\uFE0F Light</span>
        </button>
      </li>
    </ul>
  </div>
</nav>`;
  }
});

// angular:jit:style:src/app/shared/components/navbar/navbar.component.css
var navbar_component_default2;
var init_navbar_component2 = __esm({
  "angular:jit:style:src/app/shared/components/navbar/navbar.component.css"() {
    navbar_component_default2 = '/* src/app/shared/components/navbar/navbar.component.css */\n.navbar {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(12, 20, 32, 0.92) 0%,\n      rgba(18, 32, 50, 0.92) 60%) !important;\n  -webkit-backdrop-filter: blur(14px) saturate(140%);\n  backdrop-filter: blur(14px) saturate(140%);\n  z-index: 1000;\n  transition: padding .35s, box-shadow .35s;\n  padding: .9rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 4px 18px -6px rgba(0, 0, 0, 0.5);\n}\n.navbar.scrolled {\n  padding: .55rem 0;\n  box-shadow: 0 6px 28px -8px rgba(0, 0, 0, 0.6);\n}\n.nav-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n  margin-left: 0;\n}\n.logo img {\n  height: 55px;\n  width: auto;\n  display: block;\n  filter: brightness(1.25) contrast(1.2) saturate(1.15) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6));\n  object-fit: contain;\n  transition: transform 0.3s ease, filter 0.3s ease;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: crisp-edges;\n  backface-visibility: hidden;\n  -webkit-font-smoothing: antialiased;\n}\n.logo:hover img {\n  transform: scale(1.05);\n  filter: brightness(1.35) contrast(1.3) saturate(1.2) drop-shadow(0 3px 10px rgba(11, 110, 255, 0.4));\n}\n.logo img[style*="display:none"] + .wordmark {\n  padding-left: 0;\n}\n.wordmark {\n  font-size: 1.1rem;\n  letter-spacing: .5px;\n}\n.nav-links {\n  list-style: none;\n  display: flex;\n  margin: -100;\n  padding: 0;\n  align-items: center;\n  gap: 2rem;\n}\n.nav-links li {\n  position: relative;\n}\n.nav-links li.dropdown > a {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.dropdown-icon {\n  transition: transform 0.2s ease;\n}\n.nav-links li.dropdown > a.active .dropdown-icon {\n  transform: rotate(180deg);\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 0.5rem;\n  list-style: none;\n  padding: 0.5rem 0;\n  background: rgba(12, 20, 32, 0.95);\n  -webkit-backdrop-filter: blur(14px) saturate(140%);\n  backdrop-filter: blur(14px) saturate(140%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n  min-width: 180px;\n  z-index: 1001;\n  animation: dropdownFadeIn 0.2s ease;\n}\n@keyframes dropdownFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-menu li {\n  margin: 0;\n}\n.dropdown-menu li a {\n  display: block;\n  padding: 0.65rem 1.2rem;\n  color: #fff;\n  text-decoration: none;\n  transition: background 0.2s, color 0.2s;\n  border-radius: 0;\n  white-space: nowrap;\n}\n.dropdown-menu li a:hover {\n  background: #0B6EFF;\n  color: #fff;\n}\n.nav-links li a {\n  letter-spacing: .4px;\n}\n.nav-inner.container {\n  gap: 2.5rem;\n}\n.nav-links li a,\n.nav-links li button {\n  background: none;\n  border: none;\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n  font: inherit;\n  padding: .25rem .5rem;\n  border-radius: 4px;\n  transition: background .2s, color .2s;\n  font-size: 18px;\n}\n.nav-links li a:hover,\n.nav-links li button:hover {\n  background: #0B6EFF;\n}\n.theme-toggle button {\n  display: flex;\n  align-items: center;\n  gap: .4rem;\n  font-weight: 600;\n  font-size: .8rem;\n  padding: .35rem .7rem;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.theme-toggle button[data-theme=light] {\n  background: #ffffff;\n  color: #1f2933;\n  border-color: #d1d9e2;\n}\n.theme-toggle button[data-theme=light]:hover {\n  background: #f1f5f9;\n}\n.theme-toggle button[data-theme=dark] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.theme-toggle button[data-theme=dark]:hover {\n  background: #0B6EFF;\n  color: #fff;\n}\n.nav-links li.admin a {\n  color: #00C28A;\n}\n.hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 4px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.hamburger span {\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  border-radius: 2px;\n}\n.auth-links button {\n  background: #0B6EFF;\n  color: #fff;\n}\n.auth-links button.signup-btn {\n  background: #00C28A;\n}\n.avatar {\n  background: #0B6EFF;\n  color: #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n@media (max-width: 900px) {\n  .navbar {\n    padding: 1rem 1.25rem;\n  }\n  .logo img {\n    height: 48px;\n  }\n  .hamburger {\n    display: flex;\n    padding: 0.5rem;\n    margin-right: -0.5rem;\n    z-index: 1001;\n  }\n  .nav-links {\n    position: fixed;\n    inset: 0 0 0 25%;\n    background:\n      linear-gradient(\n        135deg,\n        #0f1724 0%,\n        #1a2332 100%);\n    flex-direction: column;\n    padding: 5rem 2rem 2rem;\n    transform: translateX(100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    align-items: flex-start;\n    gap: 0.5rem;\n    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.3);\n    overflow-y: auto;\n    z-index: 1000;\n  }\n  .nav-links.open {\n    transform: translateX(0);\n  }\n  .nav-links a {\n    width: 100%;\n    padding: 0.875rem 1rem;\n    border-radius: 8px;\n    transition: all 0.2s ease;\n  }\n  .nav-links a:hover {\n    background: rgba(255, 255, 255, 0.1);\n    padding-left: 1.25rem;\n  }\n  .dropdown-menu {\n    position: static;\n    margin-top: 0.5rem;\n    margin-left: 1rem;\n    box-shadow: none;\n    border: none;\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 8px;\n    padding: 0.5rem 0;\n    background: rgba(255, 255, 255, 0.05);\n    animation: none;\n  }\n  .dropdown-menu li a {\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n  }\n  .nav-links li.dropdown > a {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .auth-links {\n    width: 100%;\n    flex-direction: column;\n    gap: 0.75rem;\n    margin-top: 1rem;\n    padding-top: 1rem;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .auth-links button {\n    width: 100%;\n    padding: 0.875rem 1.5rem;\n    min-height: 48px;\n    font-size: 1rem;\n  }\n}\n@media (max-width: 600px) {\n  .navbar {\n    padding: 1rem 1.25rem;\n  }\n  .nav-links {\n    inset: 0;\n    padding: 4.5rem 1.5rem 2rem;\n  }\n  .logo {\n    font-size: 1.375rem;\n  }\n}\n@media (max-width: 480px) {\n  .navbar {\n    padding: 0.875rem 1rem;\n  }\n  .logo img {\n    height: 42px;\n  }\n  .nav-links {\n    padding: 4rem 1.25rem 2rem;\n  }\n  .logo {\n    font-size: 1.25rem;\n  }\n  .hamburger span {\n    width: 24px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n';
  }
});

// src/app/shared/components/navbar/navbar.component.ts
var NavbarComponent;
var init_navbar_component3 = __esm({
  "src/app/shared/components/navbar/navbar.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar_component();
    init_navbar_component2();
    init_core();
    init_router();
    init_auth_service();
    init_theme_service();
    NavbarComponent = class NavbarComponent2 {
      auth;
      router;
      themeService;
      links = [
        { label: "Home", route: "/", fragment: "home" },
        { label: "Features", route: "/", fragment: "features" },
        {
          label: "Pricing",
          route: "/",
          fragment: "pricing",
          sublinks: [
            { label: "Individual", route: "/#pricing-individual" },
            { label: "Schools", route: "/#pricing-schools" },
            { label: "Colleges", route: "/#pricing-colleges" }
          ]
        },
        { label: "Wallet", route: "/wallet" },
        { label: "Admin", route: "/admin", adminOnly: true }
      ];
      mobileMenuOpen = false;
      scrolled = false;
      openDropdown = null;
      theme = "dark";
      constructor(auth, router, themeService) {
        this.auth = auth;
        this.router = router;
        this.themeService = themeService;
        this.themeService.themeChanges().subscribe((t) => this.theme = t);
      }
      onScroll() {
        this.scrolled = window.scrollY > 10;
      }
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      }
      navigate(link, event) {
        event.preventDefault();
        if (link.adminOnly && !this.auth.isAdmin()) {
          return;
        }
        const targetUrl = link.route;
        const currentUrl = this.router.url.split("#")[0];
        if (this.mobileMenuOpen) {
          this.mobileMenuOpen = false;
        }
        if (currentUrl === targetUrl) {
          if (link.fragment) {
            this.scrollToFragment(link.fragment);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          this.router.navigate([targetUrl]).then(() => {
            if (link.fragment) {
              setTimeout(() => this.scrollToFragment(link.fragment), 100);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          });
        }
      }
      scrollToFragment(fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      logout() {
        this.auth.logout();
        this.router.navigate(["/"]);
      }
      toggleTheme() {
        this.themeService.toggleTheme();
      }
      toggleDropdown(label, event) {
        event.stopPropagation();
        this.openDropdown = this.openDropdown === label ? null : label;
      }
      navigateToSublink(sublink, event) {
        event.preventDefault();
        if (sublink.route.includes("#")) {
          const [path, fragment] = sublink.route.split("#");
          const targetPath = path || "/";
          const currentPath = this.router.url.split("#")[0];
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
          this.mobileMenuOpen = false;
        }
      }
      closeDropdown() {
        this.openDropdown = null;
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router },
        { type: ThemeService }
      ];
      static propDecorators = {
        onScroll: [{ type: HostListener, args: ["window:scroll"] }],
        closeDropdown: [{ type: HostListener, args: ["document:click"] }]
      };
    };
    NavbarComponent = __decorate([
      Component({
        selector: "app-navbar",
        template: navbar_component_default,
        standalone: false,
        styles: [navbar_component_default2]
      })
    ], NavbarComponent);
  }
});

export {
  AuthService,
  init_auth_service,
  ThemeService,
  init_theme_service,
  NavbarComponent,
  init_navbar_component3 as init_navbar_component
};
//# sourceMappingURL=chunk-HLMMOK6G.js.map
