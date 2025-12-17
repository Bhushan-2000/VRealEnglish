import {
  ToastService,
  init_toast_service
} from "./chunk-U4UBZW3U.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-EI44HNNH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:style:inline:src/app/shared/components/toast-container/toast-container.component.ts;CiAgICAudG9hc3QtY29udGFpbmVyIHsKICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICB0b3A6IDgwcHg7CiAgICAgIHJpZ2h0OiAyMHB4OwogICAgICB6LWluZGV4OiA5OTk5OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBnYXA6IDEwcHg7CiAgICAgIG1heC13aWR0aDogNDAwcHg7CiAgICB9CgogICAgLnRvYXN0IHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiAxMnB4OwogICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7CiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTsKICAgICAgYmFja2dyb3VuZDogd2hpdGU7CiAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2Utb3V0OwogICAgICBtaW4td2lkdGg6IDMyMHB4OwogICAgfQoKICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7CiAgICAgIGZyb20gewogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MDBweCk7CiAgICAgICAgb3BhY2l0eTogMDsKICAgICAgfQogICAgICB0byB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOwogICAgICAgIG9wYWNpdHk6IDE7CiAgICAgIH0KICAgIH0KCiAgICAudG9hc3QtaWNvbiB7CiAgICAgIHdpZHRoOiAyNHB4OwogICAgICBoZWlnaHQ6IDI0cHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgIGZsZXgtc2hyaW5rOiAwOwogICAgfQoKICAgIC50b2FzdC1zdWNjZXNzIHsKICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDBDMjhBOwogICAgfQoKICAgIC50b2FzdC1zdWNjZXNzIC50b2FzdC1pY29uIHsKICAgICAgYmFja2dyb3VuZDogIzAwQzI4QTsKICAgICAgY29sb3I6IHdoaXRlOwogICAgfQoKICAgIC50b2FzdC1lcnJvciB7CiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0ZGNDc1NzsKICAgIH0KCiAgICAudG9hc3QtZXJyb3IgLnRvYXN0LWljb24gewogICAgICBiYWNrZ3JvdW5kOiAjRkY0NzU3OwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLnRvYXN0LXdhcm5pbmcgewogICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNGRkE1MDA7CiAgICB9CgogICAgLnRvYXN0LXdhcm5pbmcgLnRvYXN0LWljb24gewogICAgICBiYWNrZ3JvdW5kOiAjRkZBNTAwOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLnRvYXN0LWluZm8gewogICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQjZFRkY7CiAgICB9CgogICAgLnRvYXN0LWluZm8gLnRvYXN0LWljb24gewogICAgICBiYWNrZ3JvdW5kOiAjMEI2RUZGOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLnRvYXN0LW1lc3NhZ2UgewogICAgICBmbGV4OiAxOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgIGNvbG9yOiAjMjEyNTI5OwogICAgICBsaW5lLWhlaWdodDogMS41OwogICAgfQoKICAgIC50b2FzdC1jbG9zZSB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgY29sb3I6ICM2Yzc1N2Q7CiAgICAgIGZvbnQtc2l6ZTogMThweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwYWRkaW5nOiAwOwogICAgICB3aWR0aDogMjRweDsKICAgICAgaGVpZ2h0OiAyNHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBmbGV4LXNocmluazogMDsKICAgIH0KCiAgICAudG9hc3QtY2xvc2U6aG92ZXIgewogICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhOwogICAgICBjb2xvcjogIzIxMjUyOTsKICAgIH0KCiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICAgICAgLnRvYXN0LWNvbnRhaW5lciB7CiAgICAgICAgdG9wOiA3MHB4OwogICAgICAgIHJpZ2h0OiAxMHB4OwogICAgICAgIGxlZnQ6IDEwcHg7CiAgICAgICAgbWF4LXdpZHRoOiBub25lOwogICAgICB9CgogICAgICAudG9hc3QgewogICAgICAgIG1pbi13aWR0aDogYXV0bzsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgfQogICAgfQogIA==
var toast_container_component_default;
var init_toast_container_component = __esm({
  "angular:jit:style:inline:src/app/shared/components/toast-container/toast-container.component.ts;CiAgICAudG9hc3QtY29udGFpbmVyIHsKICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICB0b3A6IDgwcHg7CiAgICAgIHJpZ2h0OiAyMHB4OwogICAgICB6LWluZGV4OiA5OTk5OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBnYXA6IDEwcHg7CiAgICAgIG1heC13aWR0aDogNDAwcHg7CiAgICB9CgogICAgLnRvYXN0IHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiAxMnB4OwogICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7CiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTsKICAgICAgYmFja2dyb3VuZDogd2hpdGU7CiAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2Utb3V0OwogICAgICBtaW4td2lkdGg6IDMyMHB4OwogICAgfQoKICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7CiAgICAgIGZyb20gewogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MDBweCk7CiAgICAgICAgb3BhY2l0eTogMDsKICAgICAgfQogICAgICB0byB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOwogICAgICAgIG9wYWNpdHk6IDE7CiAgICAgIH0KICAgIH0KCiAgICAudG9hc3QtaWNvbiB7CiAgICAgIHdpZHRoOiAyNHB4OwogICAgICBoZWlnaHQ6IDI0cHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgIGZsZXgtc2hyaW5rOiAwOwogICAgfQoKICAgIC50b2FzdC1zdWNjZXNzIHsKICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDBDMjhBOwogICAgfQoKICAgIC50b2FzdC1zdWNjZXNzIC50b2FzdC1pY29uIHsKICAgICAgYmFja2dyb3VuZDogIzAwQzI4QTsKICAgICAgY29sb3I6IHdoaXRlOwogICAgfQoKICAgIC50b2FzdC1lcnJvciB7CiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0ZGNDc1NzsKICAgIH0KCiAgICAudG9hc3QtZXJyb3IgLnRvYXN0LWljb24gewogICAgICBiYWNrZ3JvdW5kOiAjRkY0NzU3OwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLnRvYXN0LXdhcm5pbmcgewogICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNGRkE1MDA7CiAgICB9CgogICAgLnRvYXN0LXdhcm5pbmcgLnRvYXN0LWljb24gewogICAgICBiYWNrZ3JvdW5kOiAjRkZBNTAwOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLnRvYXN0LWluZm8gewogICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQjZFRkY7CiAgICB9CgogICAgLnRvYXN0LWluZm8gLnRvYXN0LWljb24gewogICAgICBiYWNrZ3JvdW5kOiAjMEI2RUZGOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLnRvYXN0LW1lc3NhZ2UgewogICAgICBmbGV4OiAxOwogICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgIGNvbG9yOiAjMjEyNTI5OwogICAgICBsaW5lLWhlaWdodDogMS41OwogICAgfQoKICAgIC50b2FzdC1jbG9zZSB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgY29sb3I6ICM2Yzc1N2Q7CiAgICAgIGZvbnQtc2l6ZTogMThweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwYWRkaW5nOiAwOwogICAgICB3aWR0aDogMjRweDsKICAgICAgaGVpZ2h0OiAyNHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBmbGV4LXNocmluazogMDsKICAgIH0KCiAgICAudG9hc3QtY2xvc2U6aG92ZXIgewogICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhOwogICAgICBjb2xvcjogIzIxMjUyOTsKICAgIH0KCiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICAgICAgLnRvYXN0LWNvbnRhaW5lciB7CiAgICAgICAgdG9wOiA3MHB4OwogICAgICAgIHJpZ2h0OiAxMHB4OwogICAgICAgIGxlZnQ6IDEwcHg7CiAgICAgICAgbWF4LXdpZHRoOiBub25lOwogICAgICB9CgogICAgICAudG9hc3QgewogICAgICAgIG1pbi13aWR0aDogYXV0bzsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgfQogICAgfQogIA=="() {
    toast_container_component_default = "/* angular:styles/component:css;535f88603d40b43f6bcf20194e6916a8b33e4e782eb00670ccb1bd41d7e0dc6d;/Users/C80941/Documents/My Project/vreal-english/src/app/shared/components/toast-container/toast-container.component.ts */\n.toast-container {\n  position: fixed;\n  top: 80px;\n  right: 20px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 400px;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  background: white;\n  animation: slideIn 0.3s ease-out;\n  min-width: 320px;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.toast-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.toast-success {\n  border-left: 4px solid #00C28A;\n}\n.toast-success .toast-icon {\n  background: #00C28A;\n  color: white;\n}\n.toast-error {\n  border-left: 4px solid #FF4757;\n}\n.toast-error .toast-icon {\n  background: #FF4757;\n  color: white;\n}\n.toast-warning {\n  border-left: 4px solid #FFA500;\n}\n.toast-warning .toast-icon {\n  background: #FFA500;\n  color: white;\n}\n.toast-info {\n  border-left: 4px solid #0B6EFF;\n}\n.toast-info .toast-icon {\n  background: #0B6EFF;\n  color: white;\n}\n.toast-message {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #212529;\n  line-height: 1.5;\n}\n.toast-close {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.toast-close:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n@media (max-width: 768px) {\n  .toast-container {\n    top: 70px;\n    right: 10px;\n    left: 10px;\n    max-width: none;\n  }\n  .toast {\n    min-width: auto;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */\n";
  }
});

// src/app/shared/components/toast-container/toast-container.component.ts
var ToastContainerComponent;
var init_toast_container_component2 = __esm({
  "src/app/shared/components/toast-container/toast-container.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_toast_container_component();
    init_core();
    init_toast_service();
    ToastContainerComponent = class ToastContainerComponent2 {
      toastService;
      constructor(toastService) {
        this.toastService = toastService;
      }
      static ctorParameters = () => [
        { type: ToastService }
      ];
    };
    ToastContainerComponent = __decorate([
      Component({
        selector: "app-toast-container",
        standalone: false,
        template: `
    <div class="toast-container">
      <div 
        *ngFor="let toast of toastService.toasts()"
        class="toast toast-{{ toast.type }}"
        [@slideIn]>
        <div class="toast-icon">
          <ng-container [ngSwitch]="toast.type">
            <span *ngSwitchCase="'success'">\u2713</span>
            <span *ngSwitchCase="'error'">\u2715</span>
            <span *ngSwitchCase="'warning'">\u26A0</span>
            <span *ngSwitchCase="'info'">\u2139</span>
          </ng-container>
        </div>
        <div class="toast-message">{{ toast.message }}</div>
        <button class="toast-close" (click)="toastService.remove(toast.id)">\u2715</button>
      </div>
    </div>
  `,
        styles: [toast_container_component_default]
      })
    ], ToastContainerComponent);
  }
});

export {
  ToastContainerComponent,
  init_toast_container_component2 as init_toast_container_component
};
//# sourceMappingURL=chunk-IC4CCJYI.js.map
