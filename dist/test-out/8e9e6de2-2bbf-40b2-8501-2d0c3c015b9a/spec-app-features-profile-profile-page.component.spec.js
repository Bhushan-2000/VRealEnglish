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

// angular:jit:template:src/app/features/profile/profile-page.component.html
var profile_page_component_default;
var init_profile_page_component = __esm({
  "angular:jit:template:src/app/features/profile/profile-page.component.html"() {
    profile_page_component_default = '<div class="profile-container container">\n  <button class="back-btn" (click)="goBack()">\n    <span class="back-icon">\u2190</span> Back to Home\n  </button>\n  <h1>My Profile</h1>\n  <div class="profile-card">\n    <div class="avatar">\u{1F464}</div>\n    <h2>John Doe</h2>\n    <p>john@example.com</p>\n  </div>\n  <div class="enrolled-courses">\n    <h3>Enrolled Courses</h3>\n    <div class="course">Business English Mastery</div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/profile/profile-page.component.css
var profile_page_component_default2;
var init_profile_page_component2 = __esm({
  "angular:jit:style:src/app/features/profile/profile-page.component.css"() {
    profile_page_component_default2 = '/* src/app/features/profile/profile-page.component.css */\n.profile-container {\n  padding: 3rem 1rem;\n}\n.profile-card {\n  position: relative;\n  text-align: center;\n  background:\n    linear-gradient(\n      140deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 95%);\n  padding: 2.5rem 2rem 3rem;\n  border-radius: 24px;\n  color: #fff;\n  margin-top: 1rem;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 16px 44px -12px rgba(0, 0, 0, .55);\n}\n.profile-card:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 85% 15%,\n      rgba(11, 110, 255, 0.18),\n      transparent 65%);\n}\n.avatar {\n  width: 110px;\n  height: 110px;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  font-weight: 700;\n  color: #fff;\n  box-shadow: 0 10px 30px -8px rgba(0, 0, 0, .45);\n}\n.profile-card h2 {\n  margin: 1rem 0 .25rem;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.profile-card p {\n  margin: 0 0 1.25rem;\n  font-size: .95rem;\n  color: var(--text-secondary);\n}\n.enrolled-courses {\n  margin-top: 2.5rem;\n  text-align: left;\n}\n.enrolled-courses h3 {\n  margin: 0 0 .75rem;\n  font-size: 1.15rem;\n  font-weight: 600;\n}\n.course {\n  background:\n    linear-gradient(\n      160deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 100%);\n  padding: 1rem .9rem .85rem;\n  margin-top: .6rem;\n  border-radius: 12px;\n  color: #fff;\n  border: 1px solid var(--border);\n  font-size: .9rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.course span.level {\n  padding: .3rem .6rem;\n  border-radius: 6px;\n  font-size: .65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n}\n/*# sourceMappingURL=profile-page.component.css.map */\n';
  }
});

// src/app/features/profile/profile-page.component.ts
var ProfilePageComponent;
var init_profile_page_component3 = __esm({
  "src/app/features/profile/profile-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_profile_page_component();
    init_profile_page_component2();
    init_core();
    init_router();
    ProfilePageComponent = class ProfilePageComponent2 {
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
    ProfilePageComponent = __decorate([
      Component({
        selector: "app-profile-page",
        template: profile_page_component_default,
        standalone: false,
        styles: [profile_page_component_default2]
      })
    ], ProfilePageComponent);
  }
});

// src/app/features/profile/profile-page.component.spec.ts
var require_profile_page_component_spec = __commonJS({
  "src/app/features/profile/profile-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_profile_page_component3();
    describe("ProfilePageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [ProfilePageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProfilePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_profile_page_component_spec();
//# sourceMappingURL=spec-app-features-profile-profile-page.component.spec.js.map
