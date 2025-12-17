import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { CommunityPageComponent } from './community-page.component';

describe('CommunityPageComponent', () => {
  let component: CommunityPageComponent;
  let fixture: ComponentFixture<CommunityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityPageComponent],
      providers: [
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
