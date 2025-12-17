import {
  Router,
  init_router
} from "./chunk-VTEW27YV.js";
import "./chunk-2NDX233R.js";
import {
  Component,
  TestBed,
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

// angular:jit:template:src/app/features/live/live-page.component.html
var live_page_component_default;
var init_live_page_component = __esm({
  "angular:jit:template:src/app/features/live/live-page.component.html"() {
    live_page_component_default = '<div class="live-container container">\n  <button class="back-btn" (click)="goBack()">\n    <span class="back-icon">\u2190</span> Back to Home\n  </button>\n  <h1>Live Sessions</h1>\n  <p>Join real-time English practice with expert mentors</p>\n  <div class="sessions-list">\n    <div class="session-card">\n      <h3>Business English Practice</h3>\n      <p>Starts in 2 hours</p>\n      <button>Join</button>\n    </div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/live/live-page.component.css
var live_page_component_default2;
var init_live_page_component2 = __esm({
  "angular:jit:style:src/app/features/live/live-page.component.css"() {
    live_page_component_default2 = '/* src/app/features/live/live-page.component.css */\n.live-container {\n  padding: 3rem 1rem;\n}\n.sessions-list {\n  margin-top: 2.25rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.session-card {\n  position: relative;\n  background:\n    linear-gradient(\n      140deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 90%);\n  padding: 1.75rem 1.5rem;\n  border-radius: 16px;\n  color: #fff;\n  border: 1px solid var(--border);\n  box-shadow: 0 12px 30px -10px rgba(0, 0, 0, .5);\n  transition:\n    transform .35s ease,\n    box-shadow .35s ease,\n    border-color .35s;\n  overflow: hidden;\n}\n.session-card:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(11, 110, 255, 0.18),\n      transparent 60%);\n}\n.session-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 18px 42px -12px rgba(0, 0, 0, .55);\n  border-color: var(--brand-primary);\n}\n.session-card h3 {\n  margin: 0 0 .6rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.session-card p {\n  margin: 0 0 1rem;\n  font-size: .95rem;\n  line-height: 1.55;\n  color: var(--text-secondary);\n}\n.session-meta {\n  display: flex;\n  gap: 1rem;\n  font-size: .7rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  color: var(--text-muted);\n  margin-bottom: .75rem;\n}\n.session-actions {\n  margin-top: .75rem;\n}\n.session-actions button {\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n  color: #fff;\n  border: none;\n  padding: .6rem 1.1rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  width: 100%;\n  transition: filter .25s;\n}\n.session-actions button:hover {\n  filter: brightness(1.1);\n}\n/*# sourceMappingURL=live-page.component.css.map */\n';
  }
});

// src/app/features/live/live-page.component.ts
var LivePageComponent;
var init_live_page_component3 = __esm({
  "src/app/features/live/live-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_live_page_component();
    init_live_page_component2();
    init_core();
    init_router();
    LivePageComponent = class LivePageComponent2 {
      router;
      constructor(router) {
        this.router = router;
      }
      goBack() {
        this.router.navigate(["/"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    LivePageComponent = __decorate([
      Component({
        selector: "app-live-page",
        template: live_page_component_default,
        standalone: false,
        styles: [live_page_component_default2]
      })
    ], LivePageComponent);
  }
});

// src/app/features/live/live-page.component.spec.ts
var require_live_page_component_spec = __commonJS({
  "src/app/features/live/live-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_live_page_component3();
    describe("LivePageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [LivePageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LivePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_live_page_component_spec();
//# sourceMappingURL=spec-app-features-live-live-page.component.spec.js.map
