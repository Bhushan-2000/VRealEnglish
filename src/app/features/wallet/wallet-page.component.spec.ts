import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { WalletPageComponent } from './wallet-page.component';
import { WalletService } from '../../core/services/wallet.service';
import { ToastService } from '../../core/services/toast.service';

describe('WalletPageComponent', () => {
  let component: WalletPageComponent;
  let fixture: ComponentFixture<WalletPageComponent>;
  let mockWalletService: jasmine.SpyObj<WalletService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockToastService: jasmine.SpyObj<ToastService>;

  beforeEach(async () => {
    mockWalletService = jasmine.createSpyObj('WalletService', ['getWallet']);
    mockWalletService.getWallet.and.returnValue(of({ balance: 1000, transactions: [] }));
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockToastService = jasmine.createSpyObj('ToastService', ['success', 'error', 'warning', 'info']);

    await TestBed.configureTestingModule({
      declarations: [WalletPageComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: WalletService, useValue: mockWalletService },
        { provide: Router, useValue: mockRouter },
        { provide: ToastService, useValue: mockToastService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load wallet data on init', () => {
    expect(mockWalletService.getWallet).toHaveBeenCalled();
  });
});