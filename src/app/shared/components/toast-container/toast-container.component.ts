import { Component } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: false,
  template: `
    <div class="toast-container">
      <div 
        *ngFor="let toast of toastService.toasts()"
        class="toast toast-{{ toast.type }}"
        [@slideIn]>
        <div class="toast-icon">
          <ng-container [ngSwitch]="toast.type">
            <span *ngSwitchCase="'success'">✓</span>
            <span *ngSwitchCase="'error'">✕</span>
            <span *ngSwitchCase="'warning'">⚠</span>
            <span *ngSwitchCase="'info'">ℹ</span>
          </ng-container>
        </div>
        <div class="toast-message">{{ toast.message }}</div>
        <button class="toast-close" (click)="toastService.remove(toast.id)">✕</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
    }

    .toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      background: white;
      animation: slideIn 0.3s ease-out;
      min-width: 320px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .toast-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      flex-shrink: 0;
    }

    .toast-success {
      border-left: 4px solid #00C28A;
    }

    .toast-success .toast-icon {
      background: #00C28A;
      color: white;
    }

    .toast-error {
      border-left: 4px solid #FF4757;
    }

    .toast-error .toast-icon {
      background: #FF4757;
      color: white;
    }

    .toast-warning {
      border-left: 4px solid #FFA500;
    }

    .toast-warning .toast-icon {
      background: #FFA500;
      color: white;
    }

    .toast-info {
      border-left: 4px solid #0B6EFF;
    }

    .toast-info .toast-icon {
      background: #0B6EFF;
      color: white;
    }

    .toast-message {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      color: #212529;
      line-height: 1.5;
    }

    .toast-close {
      background: none;
      border: none;
      color: #6c757d;
      font-size: 18px;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .toast-close:hover {
      background: #f8f9fa;
      color: #212529;
    }

    @media (max-width: 768px) {
      .toast-container {
        top: 70px;
        right: 10px;
        left: 10px;
        max-width: none;
      }

      .toast {
        min-width: auto;
        width: 100%;
      }
    }
  `]
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}
}
