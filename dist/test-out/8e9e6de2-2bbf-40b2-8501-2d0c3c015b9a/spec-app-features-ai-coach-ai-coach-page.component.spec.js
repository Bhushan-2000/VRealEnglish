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

// angular:jit:template:src/app/features/ai-coach/ai-coach-page.component.html
var ai_coach_page_component_default;
var init_ai_coach_page_component = __esm({
  "angular:jit:template:src/app/features/ai-coach/ai-coach-page.component.html"() {
    ai_coach_page_component_default = '<div class="ai-coach-container container">\n  <button class="back-btn" (click)="goBack()">\n    <span class="back-icon">\u2190</span> Back to Learning\n  </button>\n  <h1>AI Coach</h1>\n  <p>Practice pronunciation and get instant feedback</p>\n  <div class="recorder">\n    <button class="record-btn">\u{1F3A4} Start Recording</button>\n    <div class="feedback-section">Your pronunciation feedback will appear here</div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/ai-coach/ai-coach-page.component.css
var ai_coach_page_component_default2;
var init_ai_coach_page_component2 = __esm({
  "angular:jit:style:src/app/features/ai-coach/ai-coach-page.component.css"() {
    ai_coach_page_component_default2 = "/* src/app/features/ai-coach/ai-coach-page.component.css */\n.ai-coach-container {\n  padding: 3rem 1rem;\n}\n.recorder {\n  margin-top: 2.25rem;\n  text-align: center;\n}\n.record-btn {\n  position: relative;\n  background:\n    linear-gradient(\n      90deg,\n      #00C28A,\n      #06B6D4);\n  color: #fff;\n  border: none;\n  padding: 1rem 2.25rem;\n  border-radius: 60px;\n  font-size: 1.05rem;\n  cursor: pointer;\n  font-weight: 600;\n  box-shadow: 0 10px 30px -8px rgba(0, 0, 0, .55);\n  transition:\n    transform .35s ease,\n    box-shadow .35s ease,\n    filter .3s;\n}\n.record-btn:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 42px -12px rgba(0, 0, 0, .6);\n  filter: brightness(1.08);\n}\n.record-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, .55);\n}\n.feedback-section {\n  margin-top: 2rem;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 100%);\n  padding: 2rem;\n  border-radius: 16px;\n  color: var(--text-secondary);\n  min-height: 220px;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, .45);\n}\n/*# sourceMappingURL=ai-coach-page.component.css.map */\n";
  }
});

// src/app/features/ai-coach/ai-coach-page.component.ts
var AiCoachPageComponent;
var init_ai_coach_page_component3 = __esm({
  "src/app/features/ai-coach/ai-coach-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ai_coach_page_component();
    init_ai_coach_page_component2();
    init_core();
    init_router();
    AiCoachPageComponent = class AiCoachPageComponent2 {
      router;
      constructor(router) {
        this.router = router;
      }
      goBack() {
        this.router.navigate(["/learning"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    AiCoachPageComponent = __decorate([
      Component({
        selector: "app-ai-coach-page",
        template: ai_coach_page_component_default,
        standalone: false,
        styles: [ai_coach_page_component_default2]
      })
    ], AiCoachPageComponent);
  }
});

// src/app/features/ai-coach/ai-coach-page.component.spec.ts
var require_ai_coach_page_component_spec = __commonJS({
  "src/app/features/ai-coach/ai-coach-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_ai_coach_page_component3();
    describe("AiCoachPageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [AiCoachPageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AiCoachPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ai_coach_page_component_spec();
//# sourceMappingURL=spec-app-features-ai-coach-ai-coach-page.component.spec.js.map
