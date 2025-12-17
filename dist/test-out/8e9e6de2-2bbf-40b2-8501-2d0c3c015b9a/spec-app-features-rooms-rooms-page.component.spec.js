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

// angular:jit:template:src/app/features/rooms/rooms-page.component.html
var rooms_page_component_default;
var init_rooms_page_component = __esm({
  "angular:jit:template:src/app/features/rooms/rooms-page.component.html"() {
    rooms_page_component_default = '<div class="rooms-container container">\n  <button class="back-btn" (click)="goBack()">\n    <span class="back-icon">\u2190</span> Back to Home\n  </button>\n  <h1>Practice Rooms</h1>\n  <p>Collaborative learning with mentors and peers</p>\n  <div class="rooms-list">\n    <div class="room-card">\n      <h3>Conversation Club</h3>\n      <p>8/10 participants</p>\n      <button>Join Room</button>\n    </div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/rooms/rooms-page.component.css
var rooms_page_component_default2;
var init_rooms_page_component2 = __esm({
  "angular:jit:style:src/app/features/rooms/rooms-page.component.css"() {
    rooms_page_component_default2 = '/* src/app/features/rooms/rooms-page.component.css */\n.rooms-container {\n  padding: 3rem 1rem;\n}\n.rooms-list {\n  margin-top: 2.25rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.room-card {\n  position: relative;\n  background:\n    linear-gradient(\n      150deg,\n      rgba(26, 35, 50, 1) 0%,\n      rgba(15, 23, 36, 1) 95%);\n  padding: 1.75rem 1.5rem;\n  border-radius: 16px;\n  color: #fff;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, .45);\n  transition:\n    transform .35s ease,\n    box-shadow .35s ease,\n    border-color .35s;\n  overflow: hidden;\n}\n.room-card:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 194, 138, 0.18),\n      transparent 60%);\n}\n.room-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 46px -10px rgba(0, 0, 0, .55);\n  border-color: var(--brand-accent);\n}\n.room-card h3 {\n  margin: 0 0 .6rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.room-card p {\n  margin: 0 0 1rem;\n  font-size: .95rem;\n  line-height: 1.55;\n  color: var(--text-secondary);\n}\n.room-actions {\n  margin-top: .75rem;\n}\n.room-actions button {\n  background:\n    linear-gradient(\n      90deg,\n      #00C28A,\n      #06B6D4);\n  color: #fff;\n  border: none;\n  padding: .6rem 1.1rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  width: 100%;\n  transition: filter .25s;\n}\n.room-actions button:hover {\n  filter: brightness(1.12);\n}\n/*# sourceMappingURL=rooms-page.component.css.map */\n';
  }
});

// src/app/features/rooms/rooms-page.component.ts
var RoomsPageComponent;
var init_rooms_page_component3 = __esm({
  "src/app/features/rooms/rooms-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_rooms_page_component();
    init_rooms_page_component2();
    init_core();
    init_router();
    RoomsPageComponent = class RoomsPageComponent2 {
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
    RoomsPageComponent = __decorate([
      Component({
        selector: "app-rooms-page",
        template: rooms_page_component_default,
        standalone: false,
        styles: [rooms_page_component_default2]
      })
    ], RoomsPageComponent);
  }
});

// src/app/features/rooms/rooms-page.component.spec.ts
var require_rooms_page_component_spec = __commonJS({
  "src/app/features/rooms/rooms-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_rooms_page_component3();
    describe("RoomsPageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [RoomsPageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(RoomsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_rooms_page_component_spec();
//# sourceMappingURL=spec-app-features-rooms-rooms-page.component.spec.js.map
