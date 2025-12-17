import {
  Router,
  init_router
} from "./chunk-VTEW27YV.js";
import {
  init_common,
  isPlatformBrowser
} from "./chunk-2NDX233R.js";
import {
  Component,
  Inject,
  PLATFORM_ID,
  TestBed,
  ViewChild,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  provideZonelessChangeDetection
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/module360/module360-page.component.html
var module360_page_component_default;
var init_module360_page_component = __esm({
  "angular:jit:template:src/app/features/module360/module360-page.component.html"() {
    module360_page_component_default = `<div class="module360-container container">
  <button class="back-btn" (click)="goBack()">
    <span class="back-icon">\u2190</span> Back to Courses
  </button>
  <div class="hero-section">
    <h1>360\xB0 VR Modules</h1>
    <p>Immersive English learning scenarios in virtual reality</p>
  </div>

  <!-- Module Selection Grid -->
  <div class="modules-grid">
    <div 
      *ngFor="let module of modules" 
      class="module-card"
      [class.selected]="selectedModule?.id === module.id"
      (click)="selectModule(module)"
      (keydown.enter)="selectModule(module)"
      (keydown.space)="selectModule(module)"
      tabindex="0"
      role="button"
      [attr.aria-label]="'Select ' + module.title + ' module'"
    >
      <div class="module-thumbnail">
        <img [src]="module.thumbnail" [alt]="module.title + ' thumbnail'" loading="lazy">
        <div class="module-overlay">
          <span class="duration">{{ module.duration }}</span>
          <span class="difficulty" [style.background-color]="getDifficultyColor(module.difficulty)">
            {{ module.difficulty }}
          </span>
        </div>
      </div>
      <div class="module-info">
        <h3>{{ module.title }}</h3>
        <p>{{ module.description }}</p>
      </div>
    </div>
  </div>

  <!-- 360 Viewer Section -->
  <div class="viewer-section" *ngIf="selectedModule">
    <div class="viewer-header">
      <h2>{{ selectedModule.title }}</h2>
      <p>{{ selectedModule.description }}</p>
    </div>
    
    <div class="viewer-wrapper">
      <div 
        #viewer360 
        class="viewer-360"
        [class.loading]="isLoading"
        role="region"
        aria-label="360 degree video player"
      >
        <div class="loading-spinner" *ngIf="isLoading">
          <div class="spinner"></div>
          <p>Loading 360\xB0 experience...</p>
        </div>
      </div>
    </div>

    <div class="viewer-controls">
      <div class="instruction">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Click and drag to look around. Use fullscreen for best VR experience.</span>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div class="empty-state" *ngIf="!selectedModule">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
      <path d="M12 6v6l4 2"></path>
    </svg>
    <h3>Select a 360\xB0 module to begin</h3>
    <p>Choose from our immersive English learning scenarios above</p>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/features/module360/module360-page.component.css
var module360_page_component_default2;
var init_module360_page_component2 = __esm({
  "angular:jit:style:src/app/features/module360/module360-page.component.css"() {
    module360_page_component_default2 = "/* src/app/features/module360/module360-page.component.css */\n.module360-container {\n  padding: 2rem 1rem;\n  min-height: 100vh;\n}\n.hero-section {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.hero-section h1 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 0.5rem;\n}\n.hero-section p {\n  font-size: 1.125rem;\n  color: var(--muted);\n}\n.modules-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.module-card {\n  background: var(--surface);\n  border: 2px solid transparent;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.module-card:hover,\n.module-card:focus {\n  border-color: var(--brand-primary);\n  transform: translateY(-4px);\n  outline: none;\n}\n.module-card.selected {\n  border-color: var(--brand-accent);\n  box-shadow: 0 8px 24px rgba(0, 194, 138, 0.2);\n}\n.module-thumbnail {\n  position: relative;\n  width: 100%;\n  padding-top: 56.25%;\n  overflow: hidden;\n}\n.module-thumbnail img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.module-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.8),\n      transparent);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.duration {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.difficulty {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.module-info {\n  padding: 1.25rem;\n}\n.module-info h3 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 0.5rem;\n}\n.module-info p {\n  font-size: 0.875rem;\n  color: var(--muted);\n  line-height: 1.5;\n}\n.viewer-section {\n  margin-top: 3rem;\n}\n.viewer-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.viewer-header h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 0.5rem;\n}\n.viewer-header p {\n  color: var(--muted);\n}\n.viewer-wrapper {\n  background: var(--surface);\n  border-radius: 16px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n}\n.viewer-360 {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  background: #000;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.viewer-360 iframe {\n  width: 100%;\n  height: 100%;\n}\n.loading-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(11, 110, 255, 0.2);\n  border-top-color: var(--brand-primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner p {\n  color: var(--muted);\n  font-size: 0.875rem;\n}\n.viewer-controls {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n}\n.instruction {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  background: rgba(11, 110, 255, 0.1);\n  border-radius: 8px;\n  color: var(--brand-primary);\n}\n.instruction svg {\n  flex-shrink: 0;\n}\n.instruction span {\n  font-size: 0.875rem;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: var(--muted);\n}\n.empty-state svg {\n  margin: 0 auto 1.5rem;\n  opacity: 0.5;\n}\n.empty-state h3 {\n  font-size: 1.5rem;\n  color: var(--text);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .hero-section h1 {\n    font-size: 2rem;\n  }\n  .modules-grid {\n    grid-template-columns: 1fr;\n  }\n  .viewer-360 {\n    height: 400px;\n  }\n  .instruction {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=module360-page.component.css.map */\n";
  }
});

// src/app/features/module360/module360-page.component.ts
var Module360PageComponent;
var init_module360_page_component3 = __esm({
  "src/app/features/module360/module360-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_module360_page_component();
    init_module360_page_component2();
    init_core();
    init_common();
    init_router();
    Module360PageComponent = class Module360PageComponent2 {
      platformId;
      router;
      viewer360Ref;
      modules = [];
      selectedModule = null;
      isLoading = false;
      viewerInitialized = false;
      // Panolens/Three.js instances
      viewer;
      panorama;
      constructor(platformId, router) {
        this.platformId = platformId;
        this.router = router;
      }
      goBack() {
        this.router.navigate(["/courses"]);
      }
      ngOnInit() {
        this.loadModules();
      }
      ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId) && this.modules.length > 0) {
          this.selectModule(this.modules[0]);
        }
      }
      ngOnDestroy() {
        this.cleanup360Viewer();
      }
      loadModules() {
        this.modules = [
          {
            id: "1",
            title: "Airport Scenario",
            description: "Practice English at the airport - Check-in, Security, and Boarding",
            videoId: "IArd6ZadFJ4",
            thumbnail: "https://img.youtube.com/vi/IArd6ZadFJ4/maxresdefault.jpg",
            duration: "5:30",
            difficulty: "beginner"
          },
          {
            id: "2",
            title: "Restaurant Experience",
            description: "Learn restaurant vocabulary and ordering food in English",
            videoId: "yRM4wsXQ5KI",
            thumbnail: "https://img.youtube.com/vi/yRM4wsXQ5KI/maxresdefault.jpg",
            duration: "6:15",
            difficulty: "intermediate"
          },
          {
            id: "3",
            title: "Business Meeting",
            description: "Professional English in a corporate environment",
            videoId: "_ldiu5OiA9g",
            thumbnail: "https://img.youtube.com/vi/_ldiu5OiA9g/maxresdefault.jpg",
            duration: "7:45",
            difficulty: "advanced"
          }
        ];
      }
      selectModule(module) {
        if (this.selectedModule?.id === module.id)
          return;
        this.selectedModule = module;
        this.isLoading = true;
        this.cleanup360Viewer();
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => this.init360Viewer(), 100);
        }
      }
      init360Viewer() {
        return __async(this, null, function* () {
          if (!this.viewer360Ref)
            return;
          try {
            const [PANOLENS, THREE] = yield Promise.all([
              import("./chunk-INU6PDRP.js"),
              import("./chunk-5UMS6RPS.js")
            ]);
            const container = this.viewer360Ref.nativeElement;
            this.viewer = new PANOLENS.Viewer({
              container,
              controlBar: true,
              autoRotate: true,
              autoRotateSpeed: 0.3,
              output: "console"
            });
            this.initYouTube360Player();
            this.viewerInitialized = true;
            this.isLoading = false;
          } catch (error) {
            console.error("Error initializing 360 viewer:", error);
            this.initYouTube360Player();
            this.isLoading = false;
          }
        });
      }
      initYouTube360Player() {
        if (!this.viewer360Ref || !this.selectedModule)
          return;
        const container = this.viewer360Ref.nativeElement;
        container.innerHTML = `
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${this.selectedModule.videoId}?autoplay=0&rel=0&modestbranding=1"
        title="${this.selectedModule.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="border-radius: 12px;"
      ></iframe>
    `;
      }
      cleanup360Viewer() {
        if (this.viewer) {
          this.viewer.dispose();
          this.viewer = null;
        }
        if (this.panorama) {
          this.panorama.dispose();
          this.panorama = null;
        }
        this.viewerInitialized = false;
      }
      getDifficultyColor(difficulty) {
        const colors = {
          "beginner": "#00C28A",
          "intermediate": "#FFB800",
          "advanced": "#FF6B6B"
        };
        return colors[difficulty] || "#9aa6b2";
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] },
        { type: Router }
      ];
      static propDecorators = {
        viewer360Ref: [{ type: ViewChild, args: ["viewer360", { static: false }] }]
      };
    };
    Module360PageComponent = __decorate([
      Component({
        selector: "app-module360-page",
        template: module360_page_component_default,
        standalone: false,
        styles: [module360_page_component_default2]
      })
    ], Module360PageComponent);
  }
});

// src/app/features/module360/module360-page.component.spec.ts
var require_module360_page_component_spec = __commonJS({
  "src/app/features/module360/module360-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_module360_page_component3();
    describe("Module360PageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [Module360PageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter },
            { provide: PLATFORM_ID, useValue: "browser" }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Module360PageComponent);
        component = fixture.componentInstance;
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should initialize with modules data", () => {
        expect(component.modules).toBeDefined();
        expect(Array.isArray(component.modules)).toBe(true);
      });
    });
  }
});
export default require_module360_page_component_spec();
//# sourceMappingURL=spec-app-features-module360-module360-page.component.spec.js.map
