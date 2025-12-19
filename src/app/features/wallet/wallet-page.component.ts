import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService, WalletState } from '../../core/services/wallet.service';
import { ToastService } from '../../core/services/toast.service';
import { Observable, interval, Subscription } from 'rxjs';

interface PracticeSession {
  id: string;
  date: string;
  duration: number; // in seconds
  verifiedDuration: number; // AI-verified speaking time (excludes pauses, silence)
  type: 'random-call' | 'group-call';
  participants?: number;
  earnings: number;
}

interface SubscriptionStatus {
  active: boolean;
  plan: string;
  amount: number;
  startDate: string;
  endDate: string;
  daysRemaining: number;
}

@Component({ 
  selector: 'app-wallet-page', 
  templateUrl: './wallet-page.component.html', 
  styleUrls: ['./wallet-page.component.css'],
  standalone: false
})
export class WalletPageComponent implements OnInit, OnDestroy {
  wallet$!: Observable<WalletState>;
  
  subscription: SubscriptionStatus = {
    active: true,
    plan: 'Speaking Practice Premium',
    amount: 699,
    startDate: '2025-11-15',
    endDate: '2025-12-15',
    daysRemaining: 1
  };

  totalPracticeTime = 0;
  totalVerifiedTime = 0; // AI-verified time in seconds
  todayPracticeTime = 0; // today's practice in seconds
  monthlyTarget = 60 * 60 * 2 * 30; // 2 hours daily for 30 days = 3600 seconds
  
  // Earnings calculation
  // ₹699 subscription / 60 hours target = ₹11.65 per hour / 60 = ₹0.194166667 per minute
  earningsPerMinute = 0.194166667;
  totalEarnings = 0;
  pendingPayout = 0;
  
  practiceSessions: PracticeSession[] = [
    {
      id: 'session-1',
      date: '2025-12-14 10:30 AM',
      duration: 7200, // 2 hours = 120 minutes
      verifiedDuration: 6480, // 108 minutes AI-verified
      type: 'group-call',
      participants: 8,
      earnings: 20.97 // 108 minutes * 0.194166667 = ₹20.97
    },
    {
      id: 'session-2',
      date: '2025-12-13 09:15 AM',
      duration: 7200, // 2 hours = 120 minutes
      verifiedDuration: 6300, // 105 minutes AI-verified
      type: 'random-call',
      earnings: 20.39 // 105 minutes * 0.194166667 = ₹20.39
    },
    {
      id: 'session-3',
      date: '2025-12-12 08:45 AM',
      duration: 7200, // 2 hours = 120 minutes
      verifiedDuration: 6600, // 110 minutes AI-verified
      type: 'group-call',
      participants: 5,
      earnings: 21.36 // 110 minutes * 0.194166667 = ₹21.36
    },
    {
      id: 'session-4',
      date: '2025-12-11 11:00 AM',
      duration: 7200, // 2 hours = 120 minutes
      verifiedDuration: 6420, // 107 minutes AI-verified
      type: 'random-call',
      earnings: 20.78 // 107 minutes * 0.194166667 = ₹20.78
    },
    {
      id: 'session-5',
      date: '2025-12-10 02:30 PM',
      duration: 7200, // 2 hours = 120 minutes
      verifiedDuration: 6540, // 109 minutes AI-verified
      type: 'group-call',
      participants: 10,
      earnings: 21.16 // 109 minutes * 0.194166667 = ₹21.16
    }
  ];

  progressPercentage = 0;
  verificationRate = 0;
  
  // Modal States
  showCouponModal = signal(false);
  selectedBrand = signal<{name: string; min: number; max: number} | null>(null);
  couponAmount = signal(0);
  generatedCoupon = signal<{code: string; amount: number; brand: string} | null>(null);
  showCouponResultModal = signal(false);
  
  private timerSubscription?: Subscription;

  constructor(
    private walletService: WalletService,
    private router: Router,
    private toastService: ToastService
  ) {}

  goBack(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.wallet$ = this.walletService.getWallet();
    this.calculateTotals();
    this.updateProgress();
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private calculateTotals(): void {
    this.totalPracticeTime = this.practiceSessions.reduce((sum, session) => sum + session.duration, 0);
    this.totalVerifiedTime = this.practiceSessions.reduce((sum, session) => sum + session.verifiedDuration, 0);
    this.totalEarnings = this.practiceSessions.reduce((sum, session) => sum + session.earnings, 0);
    
    this.todayPracticeTime = this.practiceSessions[0]?.duration || 0;
    
    this.pendingPayout = this.totalEarnings;
    
    this.verificationRate = this.totalPracticeTime > 0 
      ? (this.totalVerifiedTime / this.totalPracticeTime) * 100 
      : 0;
  }

  private updateProgress(): void {
    this.progressPercentage = (this.totalVerifiedTime / this.monthlyTarget) * 100;
    if (this.progressPercentage > 100) this.progressPercentage = 100;
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  }

  formatTimeDetailed(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hours ${minutes} minutes`;
  }

  getSessionTypeLabel(type: string): string {
    return type === 'random-call' ? 'Random Call' : 'Group Call';
  }

  getVerificationPercentage(session: PracticeSession): number {
    return (session.verifiedDuration / session.duration) * 100;
  }

  claimEarnings(): void {
    if (this.pendingPayout > 0) {
      const amount = this.pendingPayout;
      this.walletService.addFunds(amount, `Speaking practice earnings (${this.formatTimeDetailed(this.totalVerifiedTime)})`)
        .subscribe(() => {
          this.toastService.success(`₹${amount.toFixed(2)} has been credited to your wallet!`);
          this.pendingPayout = 0;
        });
    }
  }

  renewSubscription(): void {
    this.walletService.spend(699, 'Speaking Practice Premium - Monthly Renewal')
      .subscribe(
        () => {
          this.toastService.success('Subscription renewed successfully!');
          this.subscription.daysRemaining = 30;
        },
        (error) => {
          this.toastService.error(error.message || 'Insufficient balance. Please add funds.');
        }
      );
  }

  startPracticeSession(): void {
    this.toastService.info('Redirecting to Community Hub...');
    setTimeout(() => {
      this.router.navigate(['/community']);
    }, 500);
  }

  openCouponModal(brand: string, minAmount: number, maxAmount: number): void {
    const currentWallet = this.walletService.walletSubject.value;
    if (currentWallet.balance < minAmount) {
      this.toastService.error(`Insufficient balance! You need at least ₹${minAmount} to create a ${brand} coupon. Your current balance is ₹${currentWallet.balance.toFixed(2)}.`);
      return;
    }
    
    this.selectedBrand.set({ name: brand, min: minAmount, max: maxAmount });
    this.couponAmount.set(minAmount);
    this.showCouponModal.set(true);
  }

  closeCouponModal(): void {
    this.showCouponModal.set(false);
    this.selectedBrand.set(null);
    this.couponAmount.set(0);
  }

  createCoupon(): void {
    const brand = this.selectedBrand();
    if (!brand) return;

    const amount = this.couponAmount();
    const currentWallet = this.walletService.walletSubject.value;

    if (isNaN(amount) || amount <= 0) {
      this.toastService.error('Please enter a valid amount!');
      return;
    }

    if (amount < brand.min) {
      this.toastService.error(`Minimum coupon amount for ${brand.name} is ₹${brand.min}!`);
      return;
    }

    if (amount > brand.max) {
      this.toastService.error(`Maximum coupon amount for ${brand.name} is ₹${brand.max}!`);
      return;
    }

    if (amount > currentWallet.balance) {
      this.toastService.error(`Insufficient balance! You only have ₹${currentWallet.balance.toFixed(2)} in your wallet but trying to create a ₹${amount} coupon.`);
      return;
    }

    // Generate coupon code
    const couponCode = `VRE${brand.name.substring(0, 3).toUpperCase()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Deduct from wallet
    this.walletService.spend(amount, `${brand.name.charAt(0).toUpperCase() + brand.name.slice(1)} coupon created`)
      .subscribe(
        () => {
          this.generatedCoupon.set({ code: couponCode, amount, brand: brand.name });
          this.closeCouponModal();
          this.showCouponResultModal.set(true);
          this.toastService.success('Coupon created successfully!');
        },
        (error) => {
          this.toastService.error(error.message || 'Failed to create coupon. Please try again.');
        }
      );
  }

  closeCouponResultModal(): void {
    this.showCouponResultModal.set(false);
    this.generatedCoupon.set(null);
  }

  copyCouponCode(): void {
    console.log('Copy coupon clicked');
    const coupon = this.generatedCoupon();
    console.log('Generated coupon:', coupon);
    
    if (!coupon) {
      console.log('No coupon found');
      this.toastService.error('No coupon available to copy.');
      return;
    }
    
    if (!coupon.code) {
      console.log('Coupon exists but no code');
      this.toastService.error('Coupon code is empty.');
      return;
    }

    console.log('Copying code:', coupon.code);
    
    // Try to copy to clipboard
    try {
      navigator.clipboard.writeText(coupon.code).then(
        () => {
          console.log('Copy successful');
          this.toastService.success('Coupon code copied to clipboard!');
        },
        (err) => {
          console.error('Clipboard write failed:', err);
          this.toastService.error('Failed to copy. Please try again.');
        }
      );
    } catch (err) {
      console.error('Clipboard API error:', err);
      this.toastService.error('Copy not supported. Please select and copy manually.');
    }
  }
}