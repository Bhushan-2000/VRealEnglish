import {
  VideoPlayerComponent,
  init_video_player_component
} from "./chunk-S37ODVS5.js";
import {
  ToastContainerComponent,
  init_toast_container_component
} from "./chunk-IC4CCJYI.js";
import {
  NavbarComponent,
  init_navbar_component
} from "./chunk-HLMMOK6G.js";
import "./chunk-U4UBZW3U.js";
import {
  RouterModule,
  init_router
} from "./chunk-VTEW27YV.js";
import {
  CommonModule,
  init_common
} from "./chunk-2NDX233R.js";
import {
  Component,
  NgModule,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  provideZonelessChangeDetection,
  signal
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = '<a href="#main-content" class="skip-link">Skip to main content</a>\n<app-navbar></app-navbar>\n<app-toast-container></app-toast-container>\n<main id="main-content" role="main" aria-label="Main content">\n  <router-outlet></router-outlet>\n</main>\n\n';
  }
});

// angular:jit:style:src/app/app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    App = class App2 {
      title = signal("vreal-english");
    };
    App = __decorate([
      Component({
        selector: "app-root",
        template: app_default,
        standalone: false,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/shared/shared.module.ts
var SharedModule;
var init_shared_module = __esm({
  "src/app/shared/shared.module.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_common();
    init_router();
    init_navbar_component();
    init_video_player_component();
    init_toast_container_component();
    SharedModule = class SharedModule2 {
    };
    SharedModule = __decorate([
      NgModule({
        declarations: [NavbarComponent, VideoPlayerComponent, ToastContainerComponent],
        imports: [CommonModule, RouterModule],
        exports: [NavbarComponent, VideoPlayerComponent, ToastContainerComponent]
      })
    ], SharedModule);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_router();
    init_app3();
    init_shared_module();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            RouterModule.forRoot([]),
            SharedModule
          ],
          declarations: [
            App
          ],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render navbar and router outlet", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("app-navbar")).toBeTruthy();
        expect(compiled.querySelector("router-outlet")).toBeTruthy();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
