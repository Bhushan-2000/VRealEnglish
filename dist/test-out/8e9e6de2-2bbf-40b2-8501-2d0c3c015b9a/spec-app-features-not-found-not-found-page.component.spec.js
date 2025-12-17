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

// angular:jit:template:src/app/features/not-found/not-found-page.component.html
var not_found_page_component_default;
var init_not_found_page_component = __esm({
  "angular:jit:template:src/app/features/not-found/not-found-page.component.html"() {
    not_found_page_component_default = '<div class="not-found-container container">\n  <h1>404</h1>\n  <p>Page not found</p>\n  <a href="/" class="home-link">Go to Home</a>\n</div>';
  }
});

// angular:jit:style:src/app/features/not-found/not-found-page.component.css
var not_found_page_component_default2;
var init_not_found_page_component2 = __esm({
  "angular:jit:style:src/app/features/not-found/not-found-page.component.css"() {
    not_found_page_component_default2 = "/* src/app/features/not-found/not-found-page.component.css */\n.not-found-container {\n  padding: 5rem 1rem 6rem;\n  text-align: center;\n  color: #fff;\n}\n.not-found-container h1 {\n  font-size: 6rem;\n  margin: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, .55));\n}\n.not-found-container p {\n  margin: 1rem auto 0;\n  max-width: 560px;\n  font-size: 1.05rem;\n  line-height: 1.6;\n  color: var(--text-secondary);\n}\n.home-link {\n  display: inline-block;\n  margin-top: 2.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n  color: #fff;\n  padding: .85rem 2.1rem;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n  box-shadow: 0 12px 34px -10px rgba(0, 0, 0, .55);\n  transition: transform .35s ease, box-shadow .35s ease;\n}\n.home-link:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 18px 50px -12px rgba(0, 0, 0, .6);\n}\n/*# sourceMappingURL=not-found-page.component.css.map */\n";
  }
});

// src/app/features/not-found/not-found-page.component.ts
var NotFoundPageComponent;
var init_not_found_page_component3 = __esm({
  "src/app/features/not-found/not-found-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_not_found_page_component();
    init_not_found_page_component2();
    init_core();
    NotFoundPageComponent = class NotFoundPageComponent2 {
    };
    NotFoundPageComponent = __decorate([
      Component({
        selector: "app-not-found-page",
        template: not_found_page_component_default,
        standalone: false,
        styles: [not_found_page_component_default2]
      })
    ], NotFoundPageComponent);
  }
});

// src/app/features/not-found/not-found-page.component.spec.ts
var require_not_found_page_component_spec = __commonJS({
  "src/app/features/not-found/not-found-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_not_found_page_component3();
    describe("NotFoundPageComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [NotFoundPageComponent],
          providers: [
            provideZonelessChangeDetection()
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(NotFoundPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_not_found_page_component_spec();
//# sourceMappingURL=spec-app-features-not-found-not-found-page.component.spec.js.map
