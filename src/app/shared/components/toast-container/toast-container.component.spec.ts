import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ToastContainerComponent } from './toast-container.component';
import { ToastService } from '../../../core/services/toast.service';
import { signal } from '@angular/core';

describe('ToastContainerComponent', () => {
  let component: ToastContainerComponent;
  let fixture: ComponentFixture<ToastContainerComponent>;
  let mockToastService: any;

  beforeEach(async () => {
    mockToastService = {
      toasts: signal([]),
      remove: jasmine.createSpy('remove')
    };

    await TestBed.configureTestingModule({
      declarations: [ToastContainerComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ToastService, useValue: mockToastService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should access toast service', () => {
    expect(component.toastService).toBe(mockToastService);
  });
});
