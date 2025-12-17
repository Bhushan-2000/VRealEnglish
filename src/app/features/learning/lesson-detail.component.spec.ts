import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LessonDetailComponent } from './lesson-detail.component';
import { ToastService } from '../../core/services/toast.service';

describe('LessonDetailComponent', () => {
  let component: LessonDetailComponent;
  let fixture: ComponentFixture<LessonDetailComponent>;
  let mockActivatedRoute: any;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockToastService: jasmine.SpyObj<ToastService>;
  let mockDomSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({ id: 'test-lesson-id' }),
      snapshot: {
        params: { id: 'test-lesson-id' }
      }
    };
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockToastService = jasmine.createSpyObj('ToastService', ['success', 'error', 'info']);
    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    mockDomSanitizer.bypassSecurityTrustResourceUrl.and.returnValue('safe-url' as any);

    await TestBed.configureTestingModule({
      declarations: [LessonDetailComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: ToastService, useValue: mockToastService },
        { provide: DomSanitizer, useValue: mockDomSanitizer }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.currentTab()).toBe('transcript');
    expect(component.isRecording()).toBe(false);
    expect(component.isPlaying()).toBe(false);
  });

  it('should have lessons data', () => {
    expect(component.lessonId).toBeDefined();
  });
});
