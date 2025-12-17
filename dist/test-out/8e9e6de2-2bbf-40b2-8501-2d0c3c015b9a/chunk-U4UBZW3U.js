import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  signal
} from "./chunk-EI44HNNH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/core/services/toast.service.ts
var ToastService;
var init_toast_service = __esm({
  "src/app/core/services/toast.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    ToastService = class ToastService2 {
      toasts = signal([]);
      nextId = 1;
      show(message, type = "info", duration = 3e3) {
        const id = this.nextId++;
        const toast = { id, message, type, duration };
        this.toasts.update((toasts) => [...toasts, toast]);
        if (duration > 0) {
          setTimeout(() => this.remove(id), duration);
        }
      }
      success(message, duration) {
        this.show(message, "success", duration);
      }
      error(message, duration) {
        this.show(message, "error", duration);
      }
      warning(message, duration) {
        this.show(message, "warning", duration);
      }
      info(message, duration) {
        this.show(message, "info", duration);
      }
      remove(id) {
        this.toasts.update((toasts) => toasts.filter((t) => t.id !== id));
      }
      clear() {
        this.toasts.set([]);
      }
    };
    ToastService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], ToastService);
  }
});

export {
  ToastService,
  init_toast_service
};
//# sourceMappingURL=chunk-U4UBZW3U.js.map
