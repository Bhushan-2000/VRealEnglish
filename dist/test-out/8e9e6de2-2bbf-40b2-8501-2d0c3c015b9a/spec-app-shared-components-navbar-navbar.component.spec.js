import {
  AuthService,
  NavbarComponent,
  ThemeService,
  init_auth_service,
  init_navbar_component,
  init_theme_service
} from "./chunk-HLMMOK6G.js";
import {
  Router,
  init_router
} from "./chunk-VTEW27YV.js";
import "./chunk-2NDX233R.js";
import {
  TestBed,
  init_core,
  init_esm,
  init_testing,
  of,
  provideZonelessChangeDetection
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/navbar/navbar.component.spec.ts
var require_navbar_component_spec = __commonJS({
  "src/app/shared/components/navbar/navbar.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_esm();
    init_navbar_component();
    init_auth_service();
    init_theme_service();
    describe("NavbarComponent", () => {
      let component;
      let fixture;
      let mockAuthService;
      let mockRouter;
      let mockThemeService;
      beforeEach(() => __async(null, null, function* () {
        mockAuthService = jasmine.createSpyObj("AuthService", ["isAuthenticated", "isAdmin", "logout"]);
        mockAuthService.isAuthenticated.and.returnValue(false);
        mockAuthService.isAdmin.and.returnValue(false);
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        mockThemeService = jasmine.createSpyObj("ThemeService", ["themeChanges", "toggleTheme"]);
        mockThemeService.themeChanges.and.returnValue(of("dark"));
        yield TestBed.configureTestingModule({
          declarations: [NavbarComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: AuthService, useValue: mockAuthService },
            { provide: Router, useValue: mockRouter },
            { provide: ThemeService, useValue: mockThemeService }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should toggle mobile menu", () => {
        expect(component.mobileMenuOpen).toBe(false);
        component.toggleMobileMenu();
        expect(component.mobileMenuOpen).toBe(true);
        component.toggleMobileMenu();
        expect(component.mobileMenuOpen).toBe(false);
      });
    });
  }
});
export default require_navbar_component_spec();
//# sourceMappingURL=spec-app-shared-components-navbar-navbar.component.spec.js.map
