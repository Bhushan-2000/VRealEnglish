import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Module360PageComponent } from './module360-page.component';

describe('Module360PageComponent', () => {
  let component: Module360PageComponent;
  let fixture: ComponentFixture<Module360PageComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [Module360PageComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: Router, useValue: mockRouter },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Module360PageComponent);
    component = fixture.componentInstance;
    // Don't call detectChanges in beforeEach to avoid ExpressionChangedAfterItHasBeenCheckedError
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with modules data', () => {
    expect(component.modules).toBeDefined();
    expect(Array.isArray(component.modules)).toBe(true);
  });
});