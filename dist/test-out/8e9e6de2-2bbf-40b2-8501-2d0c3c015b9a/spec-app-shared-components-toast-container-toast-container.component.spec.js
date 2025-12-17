import {
  ToastContainerComponent,
  init_toast_container_component
} from "./chunk-IC4CCJYI.js";
import {
  ToastService,
  init_toast_service
} from "./chunk-U4UBZW3U.js";
import {
  TestBed,
  init_core,
  init_testing,
  provideZonelessChangeDetection,
  signal
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/toast-container/toast-container.component.spec.ts
var require_toast_container_component_spec = __commonJS({
  "src/app/shared/components/toast-container/toast-container.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_toast_container_component();
    init_toast_service();
    init_core();
    describe("ToastContainerComponent", () => {
      let component;
      let fixture;
      let mockToastService;
      beforeEach(() => __async(null, null, function* () {
        mockToastService = {
          toasts: signal([]),
          remove: jasmine.createSpy("remove")
        };
        yield TestBed.configureTestingModule({
          declarations: [ToastContainerComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: ToastService, useValue: mockToastService }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(ToastContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should access toast service", () => {
        expect(component.toastService).toBe(mockToastService);
      });
    });
  }
});
export default require_toast_container_component_spec();
//# sourceMappingURL=spec-app-shared-components-toast-container-toast-container.component.spec.js.map
