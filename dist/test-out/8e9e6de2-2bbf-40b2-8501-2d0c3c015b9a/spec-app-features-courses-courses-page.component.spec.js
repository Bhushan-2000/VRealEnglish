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

// angular:jit:template:src/app/features/courses/courses-page.component.html
var courses_page_component_default;
var init_courses_page_component = __esm({
  "angular:jit:template:src/app/features/courses/courses-page.component.html"() {
    courses_page_component_default = `<div class="courses-container container">
  <button class="back-btn" (click)="goBack()">
    <span class="back-icon">\u2190</span> Back to Home
  </button>
  <h1>Explore Our Courses</h1>
  <p>Master English for career success. Designed for India's growing professionals.</p>
  <div class="course-grid">
    <div class="course-card">
      <h3>Business English Mastery</h3>
      <p>Excel in workplace communication</p>
    </div>
    <div class="course-card">
      <h3>Interview Success</h3>
      <p>Ace your English job interviews</p>
    </div>
  </div>
</div>`;
  }
});

// angular:jit:style:src/app/features/courses/courses-page.component.css
var courses_page_component_default2;
var init_courses_page_component2 = __esm({
  "angular:jit:style:src/app/features/courses/courses-page.component.css"() {
    courses_page_component_default2 = '/* src/app/features/courses/courses-page.component.css */\n.courses-container {\n  padding: 3rem 1rem;\n}\n.course-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.75rem;\n  margin-top: 2.25rem;\n}\n.course-card {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 100%);\n  padding: 1.75rem 1.5rem 2.25rem;\n  border-radius: 16px;\n  color: #fff;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, .45);\n  overflow: hidden;\n  transition:\n    transform .35s ease,\n    box-shadow .35s ease,\n    border-color .35s;\n}\n.course-card:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 15%,\n      rgba(0, 194, 138, 0.15),\n      transparent 60%);\n  opacity: .6;\n}\n.course-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 18px 40px -8px rgba(0, 0, 0, .55);\n  border-color: var(--brand-accent);\n}\n.course-card h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin: .75rem 0 1rem;\n}\n.course-card p {\n  font-size: .95rem;\n  line-height: 1.55;\n  color: var(--text-muted);\n  margin: 0 0 1.1rem;\n}\n.course-card .meta {\n  display: flex;\n  gap: 1rem;\n  font-size: .7rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  color: var(--text-secondary);\n}\n.course-card .action {\n  margin-top: 1.25rem;\n}\n.course-card .action button {\n  width: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n  border: none;\n  color: #fff;\n  padding: .65rem 1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: filter .25s;\n}\n.course-card .action button:hover {\n  filter: brightness(1.1);\n}\n/*# sourceMappingURL=courses-page.component.css.map */\n';
  }
});

// src/app/features/courses/courses-page.component.ts
var CoursesPageComponent;
var init_courses_page_component3 = __esm({
  "src/app/features/courses/courses-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_courses_page_component();
    init_courses_page_component2();
    init_core();
    init_router();
    CoursesPageComponent = class CoursesPageComponent2 {
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
    CoursesPageComponent = __decorate([
      Component({
        selector: "app-courses-page",
        template: courses_page_component_default,
        standalone: false,
        styles: [courses_page_component_default2]
      })
    ], CoursesPageComponent);
  }
});

// src/app/features/courses/courses-page.component.spec.ts
var require_courses_page_component_spec = __commonJS({
  "src/app/features/courses/courses-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_courses_page_component3();
    describe("CoursesPageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [CoursesPageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(CoursesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_courses_page_component_spec();
//# sourceMappingURL=spec-app-features-courses-courses-page.component.spec.js.map
