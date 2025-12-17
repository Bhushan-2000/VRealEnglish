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

// angular:jit:template:src/app/features/admin/admin-page.component.html
var admin_page_component_default;
var init_admin_page_component = __esm({
  "angular:jit:template:src/app/features/admin/admin-page.component.html"() {
    admin_page_component_default = '<div class="admin-container container">\n  <button class="back-btn" (click)="goBack()">\n    <span class="back-icon">\u2190</span> Back to Home\n  </button>\n  <h1>Admin Dashboard</h1>\n  <div class="admin-sections">\n    <div class="admin-card">\n      <h3>Content Manager</h3>\n      <p>Create and manage 360 modules</p>\n      <button>Manage Modules</button>\n    </div>\n    <div class="admin-card">\n      <h3>Coupon Settings</h3>\n      <p>Configure sponsor coupon rules</p>\n      <button>Configure</button>\n    </div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/admin/admin-page.component.css
var admin_page_component_default2;
var init_admin_page_component2 = __esm({
  "angular:jit:style:src/app/features/admin/admin-page.component.css"() {
    admin_page_component_default2 = '/* src/app/features/admin/admin-page.component.css */\n.admin-container {\n  padding: 3rem 1rem;\n}\n.admin-sections {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.25rem;\n}\n.admin-card {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 95%);\n  padding: 1.75rem 1.5rem;\n  border-radius: 18px;\n  color: #fff;\n  border: 1px solid var(--border);\n  box-shadow: 0 12px 34px -10px rgba(0, 0, 0, .52);\n  transition:\n    transform .35s ease,\n    box-shadow .35s ease,\n    border-color .35s;\n  overflow: hidden;\n}\n.admin-card:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(0, 194, 138, 0.22),\n      transparent 60%);\n}\n.admin-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 18px 48px -14px rgba(0, 0, 0, .55);\n  border-color: var(--brand-accent);\n}\n.admin-card h3 {\n  margin: 0 0 .75rem;\n  font-size: 1.15rem;\n  font-weight: 600;\n}\n.admin-card p {\n  margin: 0 0 1.25rem;\n  font-size: .9rem;\n  line-height: 1.55;\n  color: var(--text-secondary);\n}\nbutton {\n  background:\n    linear-gradient(\n      90deg,\n      #00C28A,\n      #06B6D4);\n  color: #fff;\n  border: none;\n  padding: .6rem 1.05rem;\n  border-radius: 10px;\n  cursor: pointer;\n  margin-top: .5rem;\n  font-weight: 600;\n  transition: filter .25s;\n}\nbutton:hover {\n  filter: brightness(1.12);\n}\n/*# sourceMappingURL=admin-page.component.css.map */\n';
  }
});

// src/app/features/admin/admin-page.component.ts
var AdminPageComponent;
var init_admin_page_component3 = __esm({
  "src/app/features/admin/admin-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_admin_page_component();
    init_admin_page_component2();
    init_core();
    init_router();
    AdminPageComponent = class AdminPageComponent2 {
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
    AdminPageComponent = __decorate([
      Component({
        selector: "app-admin-page",
        template: admin_page_component_default,
        standalone: false,
        styles: [admin_page_component_default2]
      })
    ], AdminPageComponent);
  }
});

// src/app/features/admin/admin-page.component.spec.ts
var require_admin_page_component_spec = __commonJS({
  "src/app/features/admin/admin-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_admin_page_component3();
    describe("AdminPageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [AdminPageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AdminPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_admin_page_component_spec();
//# sourceMappingURL=spec-app-features-admin-admin-page.component.spec.js.map
