import {
  WalletService,
  init_wallet_service
} from "./chunk-6QB3NW6W.js";
import {
  ToastService,
  init_toast_service
} from "./chunk-U4UBZW3U.js";
import {
  Router,
  init_router
} from "./chunk-VTEW27YV.js";
import "./chunk-2NDX233R.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  provideZonelessChangeDetection,
  signal
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/wallet/wallet-page.component.html
var wallet_page_component_default;
var init_wallet_page_component = __esm({
  "angular:jit:template:src/app/features/wallet/wallet-page.component.html"() {
    wallet_page_component_default = `<div class="wallet-container">
  <div class="container">
    <button class="back-btn" (click)="goBack()">
      <span class="back-icon">\u2190</span> Back to Home
    </button>
    <!-- Page Header -->
    <div class="wallet-header">
      <h1>\u{1F4B0} Speak & Earn Wallet</h1>
      <p class="wallet-subtitle">Practice speaking, earn rewards, and track your progress</p>
    </div>

    <!-- Quick Stats Overview -->
    <div class="stats-grid">
      <div class="stat-card stat-earnings">
        <div class="stat-icon">\u{1F4B5}</div>
        <div class="stat-content">
          <div class="stat-value">\u20B9{{ totalEarnings.toFixed(2) }}</div>
          <div class="stat-label">Total Earnings</div>
        </div>
      </div>

      <div class="stat-card stat-time">
        <div class="stat-icon">\u23F1\uFE0F</div>
        <div class="stat-content">
          <div class="stat-value">{{ formatTime(totalVerifiedTime) }}</div>
          <div class="stat-label">Verified Speaking Time</div>
        </div>
      </div>

      <div class="stat-card stat-balance" *ngIf="wallet$ | async as wallet">
        <div class="stat-icon">\u{1F4B3}</div>
        <div class="stat-content">
          <div class="stat-value">\u20B9{{ wallet.balance.toFixed(2) }}</div>
          <div class="stat-label">Wallet Balance</div>
        </div>
      </div>

      <div class="stat-card stat-rate">
        <div class="stat-icon">\u2705</div>
        <div class="stat-content">
          <div class="stat-value">{{ verificationRate.toFixed(1) }}%</div>
          <div class="stat-label">AI Verification Rate</div>
        </div>
      </div>
    </div>

    <!-- Subscription Status -->
    <div class="subscription-card" [class.active]="subscription.active">
      <div class="subscription-header">
        <div class="subscription-info">
          <h2>\u{1F3A4} {{ subscription.plan }}</h2>
          <div class="subscription-meta">
            <span class="badge" [class.badge-active]="subscription.active" [class.badge-expired]="!subscription.active">
              {{ subscription.active ? 'Active' : 'Expired' }}
            </span>
            <span class="subscription-amount">\u20B9{{ subscription.amount }}/month</span>
          </div>
        </div>
        <button class="btn btn-primary" (click)="renewSubscription()" *ngIf="subscription.daysRemaining <= 3">
          Renew Subscription
        </button>
      </div>

      <div class="subscription-details">
        <div class="detail-item">
          <span class="detail-label">Start Date:</span>
          <span class="detail-value">{{ subscription.startDate }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">End Date:</span>
          <span class="detail-value">{{ subscription.endDate }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Days Remaining:</span>
          <span class="detail-value" [class.text-warning]="subscription.daysRemaining <= 5">{{ subscription.daysRemaining }} days</span>
        </div>
      </div>

      <div class="subscription-features">
        <h3>Your Benefits</h3>
        <ul>
          <li>\u2705 Unlimited random 1-on-1 calls with verified speakers</li>
          <li>\u2705 Create & join group calls (up to 10 participants)</li>
          <li>\u2705 AI-powered voice verification & authenticity check</li>
          <li>\u2705 Earn \u20B9{{ (earningsPerMinute * 60).toFixed(2) }}/hour for verified speaking time</li>
          <li>\u2705 Real-time progress tracking & analytics</li>
          <li>\u2705 Automatic earnings credit to wallet</li>
        </ul>
      </div>
    </div>

    <!-- Progress Tracking -->
    <div class="progress-section">
      <div class="section-header">
        <h2>\u{1F4CA} Monthly Progress</h2>
        <p class="section-subtitle">Target: 2 hours daily practice for 30 days</p>
      </div>

      <div class="progress-cards">
        <div class="progress-card">
          <div class="progress-header">
            <h3>Overall Progress</h3>
            <span class="progress-percentage">{{ progressPercentage.toFixed(1) }}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="progressPercentage"></div>
          </div>
          <div class="progress-stats">
            <span>{{ formatTime(totalVerifiedTime) }} / {{ formatTime(monthlyTarget) }}</span>
          </div>
        </div>

        <div class="progress-card">
          <div class="progress-header">
            <h3>Today's Practice</h3>
            <span class="progress-percentage">{{ ((todayPracticeTime / 7200) * 100).toFixed(1) }}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="(todayPracticeTime / 7200) * 100"></div>
          </div>
          <div class="progress-stats">
            <span>{{ formatTime(todayPracticeTime) }} / 2 hours</span>
          </div>
        </div>
      </div>

      <div class="earnings-info">
        <div class="earnings-card">
          <h3>\u{1F4B0} Pending Payout</h3>
          <div class="earnings-amount">\u20B9{{ pendingPayout.toFixed(2) }}</div>
          <p class="earnings-note">Based on {{ formatTimeDetailed(totalVerifiedTime) }} of verified speaking</p>
          <button class="btn btn-primary btn-large" (click)="claimEarnings()" [disabled]="pendingPayout === 0">
            {{ pendingPayout > 0 ? 'Claim Earnings' : 'No Earnings to Claim' }}
          </button>
        </div>

        <div class="earnings-breakdown">
          <h4>Earnings Calculation</h4>
          <div class="breakdown-item">
            <span>Subscription Cost:</span>
            <span>\u20B9699</span>
          </div>
          <div class="breakdown-item">
            <span>Monthly Target:</span>
            <span>60 hours (2h \xD7 30 days)</span>
          </div>
          <div class="breakdown-item">
            <span>Earning Rate:</span>
            <span>\u20B9{{ (earningsPerMinute * 60).toFixed(2) }}/hour</span>
          </div>
          <div class="breakdown-item">
            <span>Per Minute:</span>
            <span>\u20B9{{ earningsPerMinute.toFixed(4) }}</span>
          </div>
          <div class="breakdown-total">
            <span>Your Verified Time:</span>
            <span>{{ formatTimeDetailed(totalVerifiedTime) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Practice Sessions History -->
    <div class="sessions-section">
      <div class="section-header">
        <h2>\u{1F3AF} Practice Sessions History</h2>
        <button class="btn btn-primary" (click)="startPracticeSession()">
          Start New Session
        </button>
      </div>

      <div class="sessions-list">
        <div class="session-card" *ngFor="let session of practiceSessions">
          <div class="session-header">
            <div class="session-type">
              <span class="type-badge" [class.type-random]="session.type === 'random-call'" [class.type-group]="session.type === 'group-call'">
                {{ getSessionTypeLabel(session.type) }}
              </span>
              <span class="session-participants" *ngIf="session.type === 'group-call'">
                \u{1F465} {{ session.participants }} participants
              </span>
            </div>
            <div class="session-earnings">+\u20B9{{ session.earnings.toFixed(2) }}</div>
          </div>

          <div class="session-details">
            <div class="session-date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              {{ session.date }}
            </div>
          </div>

          <div class="session-stats">
            <div class="stat-item">
              <span class="stat-label">Total Duration:</span>
              <span class="stat-value">{{ formatTime(session.duration) }}</span>
            </div>
            <div class="stat-item verified">
              <span class="stat-label">AI Verified:</span>
              <span class="stat-value">{{ formatTime(session.verifiedDuration) }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Verification Rate:</span>
              <span class="stat-value">{{ getVerificationPercentage(session).toFixed(1) }}%</span>
            </div>
          </div>

          <div class="verification-bar">
            <div class="verification-fill" [style.width.%]="getVerificationPercentage(session)"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <div class="how-it-works">
      <h2>\u{1F916} How AI Verification Works</h2>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">\u{1F3A4}</div>
          <h3>Real Voice Detection</h3>
          <p>AI identifies and verifies genuine human voice patterns</p>
        </div>
        <div class="info-card">
          <div class="info-icon">\u23F8\uFE0F</div>
          <h3>Pause Filtering</h3>
          <p>Automatically removes silence, long pauses, and dead air</p>
        </div>
        <div class="info-card">
          <div class="info-icon">\u{1F6AB}</div>
          <h3>Fake Prevention</h3>
          <p>Detects and filters out recorded audio, playback, and fake voices</p>
        </div>
        <div class="info-card">
          <div class="info-icon">\u{1F4CA}</div>
          <h3>Quality Analysis</h3>
          <p>Measures speech clarity, fluency, and engagement level</p>
        </div>
      </div>
    </div>

    <!-- Wallet Transactions -->
    <div class="transactions-section" *ngIf="wallet$ | async as wallet">
      <h2>\u{1F4B3} Recent Transactions</h2>
      <div class="transactions-list">
        <div class="transaction-item" *ngFor="let tx of wallet.transactions" [class.credit]="tx.type === 'credit'" [class.debit]="tx.type === 'debit'">
          <div class="transaction-icon">
            {{ tx.type === 'credit' ? '\u2193' : '\u2191' }}
          </div>
          <div class="transaction-details">
            <div class="transaction-desc">{{ tx.description }}</div>
            <div class="transaction-date">{{ tx.date | date:'medium' }}</div>
          </div>
          <div class="transaction-amount" [class.positive]="tx.type === 'credit'" [class.negative]="tx.type === 'debit'">
            {{ tx.type === 'credit' ? '+' : '-' }}\u20B9{{ tx.amount.toFixed(2) }}
          </div>
        </div>
      </div>
    </div>

    <!-- How to Use Your Wallet -->
    <div class="wallet-usage-section">
      <h2>\u{1F4B0} How to Use Your Wallet Balance</h2>
      <p class="usage-intro">Your earned wallet balance can be used in two flexible ways:</p>
      
      <div class="usage-options">
        <div class="usage-card">
          <div class="usage-icon">\u{1F381}</div>
          <h3>Create Partner Brand Coupons</h3>
          <p>Convert 100% of your wallet balance into custom coupons for our partner brands. Set any amount up to the brand's limit and redeem on their platforms.</p>
          <div class="partner-features">
            <span class="feature-badge">\u2713 Flexible Amount</span>
            <span class="feature-badge">\u2713 Multiple Partners</span>
            <span class="feature-badge">\u2713 Instant Generation</span>
          </div>
        </div>
        
        <div class="usage-card">
          <div class="usage-icon">\u{1F504}</div>
          <h3>Next Month Subscription</h3>
          <p>Use up to 50% of your current wallet balance to offset your next month's subscription fee. Save money while continuing your learning journey.</p>
          <div class="partner-features">
            <span class="feature-badge">\u2713 Up to 50% Balance</span>
            <span class="feature-badge">\u2713 Auto Applied</span>
            <span class="feature-badge">\u2713 Recurring Benefit</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Partner Brands Section -->
    <div class="partner-brands-section">
      <h2>\u{1F91D} Create Partner Brand Coupons</h2>
      <p class="partner-subtitle">Choose from our verified partner brands and create custom coupons with your wallet balance</p>
      
      <div class="partners-grid">
        <div class="partner-card">
          <div class="partner-logo">
            <div class="logo-placeholder" style="background: linear-gradient(135deg, #FC8019 0%, #FF6B35 100%);">
              <span style="font-size: 2rem; font-weight: bold; color: white;">S</span>
            </div>
          </div>
          <h3>Swiggy</h3>
          <div class="partner-limit">
            <span class="limit-label">Coupon Limit:</span>
            <span class="limit-value">\u20B930 - \u20B960</span>
          </div>
          <p class="partner-desc">Food delivery & dining coupons</p>
          <button class="btn btn-outline btn-block" (click)="openCouponModal('swiggy', 30, 60)">Create Coupon</button>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <div class="logo-placeholder" style="background: linear-gradient(135deg, #E23744 0%, #CB202D 100%);">
              <span style="font-size: 2rem; font-weight: bold; color: white;">Z</span>
            </div>
          </div>
          <h3>Zomato</h3>
          <div class="partner-limit">
            <span class="limit-label">Coupon Limit:</span>
            <span class="limit-value">\u20B940 - \u20B960</span>
          </div>
          <p class="partner-desc">Restaurant & food coupons</p>
          <button class="btn btn-outline btn-block" (click)="openCouponModal('zomato', 40, 60)">Create Coupon</button>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <div class="logo-placeholder" style="background: linear-gradient(135deg, #00BAF2 0%, #0B6EFF 100%);">
              <span style="font-size: 2rem; font-weight: bold; color: white;">P</span>
            </div>
          </div>
          <h3>Paytm</h3>
          <div class="partner-limit">
            <span class="limit-label">Coupon Limit:</span>
            <span class="limit-value">\u20B950 - \u20B9100</span>
          </div>
          <p class="partner-desc">Wallet & payment coupons</p>
          <button class="btn btn-outline btn-block" (click)="openCouponModal('paytm', 50, 100)">Create Coupon</button>
        </div>
      </div>

      <div class="partner-note">
        <div class="note-icon">\u2139\uFE0F</div>
        <div class="note-content">
          <strong>How Custom Coupons Work:</strong>
          <p>Select a partner brand, choose any amount within their set limit (or below), and create your custom coupon instantly. You have full control over the coupon value. Once created, use the coupon code directly on the partner's website or app.</p>
        </div>
      </div>
    </div>

    <!-- Wallet Rules -->
    <div class="wallet-rules">
      <h3>\u{1F4CB} Wallet Rules & Guidelines</h3>
      <ul>
        <li>\u{1F4A1} Money earned through speaking practice is automatically credited to your wallet</li>
        <li>\u{1F512} Wallet funds are NON-WITHDRAWABLE but can be used for partner coupons or subscriptions</li>
        <li>\u{1F381} Use 100% of balance to create custom coupons for partner brands (within brand limits)</li>
        <li>\u{1F504} Use up to 50% of balance for next month's subscription payment</li>
        <li>\u2705 AI verifies only genuine speaking time (excludes pauses, silence, fake audio)</li>
        <li>\u{1F3AF} Earn \u20B9{{ (earningsPerMinute * 60).toFixed(2) }} per hour of verified speaking</li>
        <li>\u{1F4C5} Complete 2 hours daily for 30 days to earn back your full subscription cost</li>
        <li>\u{1F91D} Join random calls or create group sessions (up to 10 users)</li>
        <li>\u26A1 Earnings are processed in real-time and updated immediately</li>
      </ul>
    </div>
  </div>
</div>

<!-- Create Coupon Modal -->
<div class="modal-overlay" *ngIf="showCouponModal()" (click)="closeCouponModal()">
  <div class="modal-content coupon-modal" (click)="$event.stopPropagation()" *ngIf="selectedBrand() as brand">
    <div class="modal-header">
      <h2>Create {{ brand.name | titlecase }} Coupon</h2>
      <button class="modal-close-btn" (click)="closeCouponModal()">\u2715</button>
    </div>
    
    <div class="modal-body">
      <div class="brand-info-banner" [ngClass]="'brand-' + brand.name">
        <div class="brand-icon">{{ brand.name.charAt(0).toUpperCase() }}</div>
        <div>
          <h3>{{ brand.name | titlecase }}</h3>
          <p>Allowed Range: \u20B9{{ brand.min }} - \u20B9{{ brand.max }}</p>
        </div>
      </div>

      <div class="balance-info" *ngIf="wallet$ | async as wallet">
        <div class="balance-item">
          <span class="balance-label">Your Wallet Balance:</span>
          <span class="balance-value">\u20B9{{ wallet.balance.toFixed(2) }}</span>
        </div>
      </div>

      <div class="form-group">
        <label for="couponAmount">Enter Coupon Amount</label>
        <div class="input-with-currency">
          <span class="currency-symbol">\u20B9</span>
          <input 
            type="number" 
            id="couponAmount"
            class="coupon-amount-input"
            [(ngModel)]="couponAmount"
            [min]="brand.min"
            [max]="brand.max"
            placeholder="Enter amount">
        </div>
        <div class="input-hint">
          Min: \u20B9{{ brand.min }} | Max: \u20B9{{ brand.max }}
        </div>
      </div>

      <div class="amount-presets">
        <button 
          class="preset-btn"
          (click)="couponAmount.set(brand.min)"
          [class.active]="couponAmount() === brand.min">
          \u20B9{{ brand.min }}
        </button>
        <button 
          class="preset-btn"
          (click)="couponAmount.set((brand.min + brand.max) / 2)"
          [class.active]="couponAmount() === (brand.min + brand.max) / 2">
          \u20B9{{ (brand.min + brand.max) / 2 }}
        </button>
        <button 
          class="preset-btn"
          (click)="couponAmount.set(brand.max)"
          [class.active]="couponAmount() === brand.max">
          \u20B9{{ brand.max }}
        </button>
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn btn-secondary" (click)="closeCouponModal()">Cancel</button>
      <button class="btn btn-primary" (click)="createCoupon()">
        Create Coupon \u2192
      </button>
    </div>
  </div>
</div>

<!-- Coupon Success Modal -->
<div class="modal-overlay" *ngIf="showCouponResultModal()" (click)="closeCouponResultModal()">
  <div class="modal-content coupon-result-modal" (click)="$event.stopPropagation()" *ngIf="generatedCoupon() as coupon">
    <div class="success-header">
      <div class="success-icon">\u2713</div>
      <h2>Coupon Created Successfully!</h2>
    </div>
    
    <div class="modal-body">
      <div class="coupon-details">
        <div class="coupon-brand">
          <span class="label">Brand:</span>
          <span class="value">{{ coupon.brand | titlecase }}</span>
        </div>
        <div class="coupon-amount-display">
          <span class="label">Amount:</span>
          <span class="value">\u20B9{{ coupon.amount.toFixed(2) }}</span>
        </div>
      </div>

      <div class="coupon-code-section">
        <p class="code-label">Your Coupon Code:</p>
        <div class="coupon-code-box">
          <code class="coupon-code">{{ coupon.code }}</code>
          <button class="copy-btn" (click)="copyCouponCode()" title="Copy code">
            \u{1F4CB} Copy
          </button>
        </div>
      </div>

      <div class="usage-instructions">
        <h4>How to Use:</h4>
        <ol>
          <li>Copy the coupon code above</li>
          <li>Visit {{ coupon.brand }}'s website or open their app</li>
          <li>Go to checkout or payment section</li>
          <li>Enter the coupon code to get \u20B9{{ coupon.amount.toFixed(2) }} discount</li>
        </ol>
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn btn-primary btn-block" (click)="closeCouponResultModal()">
        Done
      </button>
    </div>
  </div>
</div>`;
  }
});

// angular:jit:style:src/app/features/wallet/wallet-page.component.css
var wallet_page_component_default2;
var init_wallet_page_component2 = __esm({
  "angular:jit:style:src/app/features/wallet/wallet-page.component.css"() {
    wallet_page_component_default2 = '/* src/app/features/wallet/wallet-page.component.css */\n.wallet-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding: 2rem 0 4rem;\n}\n.wallet-header {\n  text-align: center;\n  margin-bottom: 3rem;\n  padding-top: 2rem;\n}\n.wallet-header h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.wallet-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.stat-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.15);\n}\n.stat-icon {\n  font-size: 2.5rem;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF15,\n      #00C28A15);\n}\n.stat-content {\n  flex: 1;\n}\n.stat-value {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f1724;\n  line-height: 1.2;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n.stat-earnings .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A15,\n      #00C28A30);\n}\n.stat-earnings .stat-value {\n  color: #00C28A;\n}\n.stat-time .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF15,\n      #0B6EFF30);\n}\n.stat-time .stat-value {\n  color: #0B6EFF;\n}\n.stat-balance .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #6f42c115,\n      #6f42c130);\n}\n.stat-balance .stat-value {\n  color: #6f42c1;\n}\n.stat-rate .stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #FFD70015,\n      #FFA50030);\n}\n.stat-rate .stat-value {\n  color: #FFA500;\n}\n.subscription-card {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 3rem;\n  border: 2px solid #e9ecef;\n}\n.subscription-card.active {\n  border-color: #00C28A;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #f0fdf4);\n}\n.subscription-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.subscription-info h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.subscription-meta {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.badge {\n  padding: 0.375rem 0.875rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-active {\n  background: #00C28A;\n  color: white;\n}\n.badge-expired {\n  background: #dc3545;\n  color: white;\n}\n.subscription-amount {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0B6EFF;\n}\n.subscription-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.detail-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.detail-label {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.detail-value {\n  font-size: 0.875rem;\n  color: #0f1724;\n  font-weight: 700;\n}\n.text-warning {\n  color: #dc3545 !important;\n}\n.subscription-features h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 1rem;\n}\n.subscription-features ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 0.75rem;\n}\n.subscription-features li {\n  font-size: 0.95rem;\n  color: #495057;\n  line-height: 1.6;\n}\n.progress-section {\n  margin-bottom: 3rem;\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.section-header h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.section-subtitle {\n  font-size: 1rem;\n  color: #6c757d;\n}\n.progress-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.progress-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.progress-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.progress-header h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.progress-percentage {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0B6EFF;\n}\n.progress-bar {\n  width: 100%;\n  height: 12px;\n  background: #e9ecef;\n  border-radius: 20px;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n  border-radius: 20px;\n  transition: width 0.6s ease;\n}\n.progress-stats {\n  font-size: 0.875rem;\n  color: #6c757d;\n  text-align: center;\n}\n.earnings-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.earnings-card {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border-radius: 20px;\n  padding: 2rem;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(11, 110, 255, 0.3);\n}\n.earnings-card h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.earnings-amount {\n  font-size: 3rem;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n}\n.earnings-note {\n  font-size: 0.95rem;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n}\n.earnings-card .btn {\n  width: 100%;\n  background: white;\n  color: #0B6EFF;\n  font-weight: 700;\n}\n.earnings-card .btn:hover {\n  background: #f8f9fa;\n}\n.earnings-card .btn:disabled {\n  background: rgba(255, 255, 255, 0.5);\n  color: rgba(11, 110, 255, 0.5);\n  cursor: not-allowed;\n}\n.earnings-breakdown {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.earnings-breakdown h4 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 1rem;\n}\n.breakdown-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #e9ecef;\n  font-size: 0.95rem;\n}\n.breakdown-item span:first-child {\n  color: #6c757d;\n}\n.breakdown-item span:last-child {\n  font-weight: 600;\n  color: #0f1724;\n}\n.breakdown-total {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0 0;\n  margin-top: 0.5rem;\n  border-top: 2px solid #0B6EFF;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.breakdown-total span:last-child {\n  color: #0B6EFF;\n}\n.sessions-section {\n  margin-bottom: 3rem;\n}\n.sessions-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.sessions-section .section-header h2 {\n  margin: 0;\n}\n.sessions-list {\n  display: grid;\n  gap: 1.5rem;\n}\n.session-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.session-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.15);\n}\n.session-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.session-type {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.type-badge {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.type-random {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0056b3);\n  color: white;\n}\n.type-group {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #009e6b);\n  color: white;\n}\n.session-participants {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.session-earnings {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #00C28A;\n}\n.session-details {\n  margin-bottom: 1rem;\n}\n.session-date {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.session-date svg {\n  color: #0B6EFF;\n}\n.session-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.stat-item .stat-label {\n  font-size: 0.8rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.stat-item .stat-value {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.stat-item.verified .stat-value {\n  color: #00C28A;\n}\n.verification-bar {\n  width: 100%;\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.verification-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #00C28A,\n      #0B6EFF);\n  border-radius: 10px;\n  transition: width 0.6s ease;\n}\n.how-it-works {\n  margin-bottom: 3rem;\n}\n.how-it-works h2 {\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 2rem;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.info-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n.info-card:hover {\n  transform: translateY(-4px);\n}\n.info-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.info-card h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n}\n.info-card p {\n  font-size: 0.95rem;\n  color: #6c757d;\n  line-height: 1.6;\n}\n.transactions-section {\n  margin-bottom: 3rem;\n}\n.transactions-section h2 {\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 2rem;\n}\n.transactions-list {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.transaction-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.transaction-item:last-child {\n  border-bottom: none;\n}\n.transaction-icon {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.transaction-item.credit .transaction-icon {\n  background: #00C28A15;\n  color: #00C28A;\n}\n.transaction-item.debit .transaction-icon {\n  background: #dc354515;\n  color: #dc3545;\n}\n.transaction-details {\n  flex: 1;\n}\n.transaction-desc {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #0f1724;\n  margin-bottom: 0.25rem;\n}\n.transaction-date {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.transaction-amount {\n  font-size: 1.25rem;\n  font-weight: 800;\n}\n.transaction-amount.positive {\n  color: #00C28A;\n}\n.transaction-amount.negative {\n  color: #dc3545;\n}\n.wallet-rules {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-left: 4px solid #0B6EFF;\n}\n.wallet-rules h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 1rem;\n}\n.wallet-rules ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.wallet-rules li {\n  padding: 0.75rem 0;\n  font-size: 0.95rem;\n  color: #495057;\n  line-height: 1.6;\n  border-bottom: 1px solid #e9ecef;\n}\n.wallet-rules li:last-child {\n  border-bottom: none;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0056b3);\n  color: white;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0056b3,\n      #003d82);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(11, 110, 255, 0.3);\n}\n.btn-primary:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-large {\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .wallet-container {\n    padding: 1.5rem 1.25rem 3rem;\n  }\n  .wallet-header h1 {\n    font-size: 1.875rem;\n    word-break: break-word;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .stat-card {\n    padding: 1.5rem;\n  }\n  .stat-value {\n    font-size: 1.75rem;\n  }\n  .stat-label {\n    font-size: 0.875rem;\n  }\n  .subscription-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .subscription-header .btn {\n    width: 100%;\n    min-height: 48px;\n  }\n  .subscription-details {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .subscription-card {\n    padding: 1.75rem 1.25rem;\n  }\n  .earnings-info {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .earnings-card {\n    padding: 1.75rem 1.25rem;\n  }\n  .earnings-amount {\n    font-size: 2.25rem;\n  }\n  .earnings-label {\n    font-size: 0.9375rem;\n  }\n  .sessions-section .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .sessions-section .btn {\n    width: 100%;\n    min-height: 48px;\n  }\n  .session-card {\n    padding: 1.5rem 1.25rem;\n  }\n  .session-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .session-stats {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n  }\n  .info-card {\n    padding: 1.5rem 1.25rem;\n  }\n  .section-header h2 {\n    font-size: 1.5rem;\n    word-break: break-word;\n  }\n  .progress-container {\n    margin: 1.5rem 0;\n  }\n  .btn-primary,\n  .btn-secondary {\n    width: 100%;\n    min-height: 48px;\n    padding: 0.875rem 1.5rem;\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .wallet-container {\n    padding: 1rem 1rem 2rem;\n  }\n  .wallet-header {\n    margin-bottom: 1.5rem;\n  }\n  .wallet-header h1 {\n    font-size: 1.625rem;\n  }\n  .stat-card {\n    padding: 1.25rem 1rem;\n  }\n  .stat-icon {\n    font-size: 1.75rem;\n    width: 48px;\n    height: 48px;\n  }\n  .stat-value {\n    font-size: 1.5rem;\n  }\n  .subscription-card,\n  .earnings-card,\n  .info-card {\n    padding: 1.5rem 1rem;\n  }\n  .session-card {\n    padding: 1.25rem 1rem;\n  }\n  .earnings-amount {\n    font-size: 2rem;\n  }\n  .section-header h2 {\n    font-size: 1.375rem;\n  }\n  .progress-label {\n    font-size: 0.875rem;\n  }\n}\n.wallet-usage-section {\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 3rem;\n}\n.wallet-usage-section h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f1724;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.usage-intro {\n  text-align: center;\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin-bottom: 2.5rem;\n}\n.usage-options {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-top: 2rem;\n}\n.usage-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border: 2px solid #e9ecef;\n  border-radius: 16px;\n  padding: 2rem;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.usage-card:hover {\n  border-color: #0B6EFF;\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.15);\n  transform: translateY(-4px);\n}\n.usage-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.usage-card h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 1rem;\n}\n.usage-card p {\n  font-size: 1rem;\n  color: #6c757d;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.partner-features {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.feature-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF15,\n      #00C28A15);\n  color: #0B6EFF;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.partner-brands-section {\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 3rem;\n}\n.partner-brands-section h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n  text-align: center;\n}\n.partner-subtitle {\n  text-align: center;\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin-bottom: 2.5rem;\n}\n.partners-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n  margin-bottom: 2.5rem;\n}\n.partner-card {\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 16px;\n  padding: 2rem;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.partner-card:hover {\n  border-color: #0B6EFF;\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.15);\n  transform: translateY(-4px);\n}\n.partner-logo {\n  margin-bottom: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n.logo-placeholder {\n  width: 80px;\n  height: 80px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.partner-card h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 1rem;\n}\n.partner-limit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF10,\n      #00C28A10);\n  border-radius: 8px;\n}\n.limit-label {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.limit-value {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0B6EFF;\n}\n.partner-desc {\n  font-size: 0.95rem;\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n  min-height: 40px;\n}\n.partner-note {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF10,\n      #00C28A10);\n  border-left: 4px solid #0B6EFF;\n  border-radius: 8px;\n  padding: 1.5rem;\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.note-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.note-content strong {\n  display: block;\n  font-size: 1.1rem;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.note-content p {\n  font-size: 0.95rem;\n  color: #6c757d;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .wallet-usage-section,\n  .partner-brands-section {\n    padding: 2rem 1.5rem;\n  }\n  .usage-options {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .partners-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .partner-note {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .wallet-usage-section,\n  .partner-brands-section {\n    padding: 1.5rem 1rem;\n  }\n  .wallet-usage-section h2,\n  .partner-brands-section h2 {\n    font-size: 1.5rem;\n  }\n  .usage-intro,\n  .partner-subtitle {\n    font-size: 1rem;\n  }\n  .usage-card,\n  .partner-card {\n    padding: 1.5rem;\n  }\n  .feature-badge {\n    font-size: 0.8rem;\n    padding: 0.4rem 0.8rem;\n  }\n  .logo-placeholder {\n    width: 64px;\n    height: 64px;\n  }\n  .logo-placeholder span {\n    font-size: 1.5rem !important;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 1rem;\n  animation: fadeIn 0.3s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-content {\n  background: white;\n  border-radius: 20px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slideUp 0.3s ease-out;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  padding: 1.5rem;\n  border-bottom: 2px solid #f8f9fa;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.modal-close-btn {\n  background: #f8f9fa;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.modal-close-btn:hover {\n  background: #e9ecef;\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-footer {\n  padding: 1.5rem;\n  border-top: 2px solid #f8f9fa;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.brand-info-banner {\n  padding: 1.25rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.brand-info-banner.brand-swiggy {\n  background:\n    linear-gradient(\n      135deg,\n      #FC8019 0%,\n      #FF6B35 100%);\n  color: white;\n}\n.brand-info-banner.brand-zomato {\n  background:\n    linear-gradient(\n      135deg,\n      #E23744 0%,\n      #CB202D 100%);\n  color: white;\n}\n.brand-info-banner.brand-paytm {\n  background:\n    linear-gradient(\n      135deg,\n      #00BAF2 0%,\n      #0B6EFF 100%);\n  color: white;\n}\n.brand-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.brand-info-banner h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n}\n.brand-info-banner p {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 0.875rem;\n}\n.balance-info {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.balance-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.balance-label {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.balance-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #00C28A;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #212529;\n}\n.input-with-currency {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.currency-symbol {\n  position: absolute;\n  left: 1rem;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #6c757d;\n  pointer-events: none;\n}\n.coupon-amount-input {\n  width: 100%;\n  padding: 1rem 1rem 1rem 2.5rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.coupon-amount-input:focus {\n  border-color: #0B6EFF;\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(11, 110, 255, 0.1);\n}\n.input-hint {\n  margin-top: 0.5rem;\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.amount-presets {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.preset-btn {\n  flex: 1;\n  padding: 0.75rem;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  font-weight: 600;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.preset-btn:hover {\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n  background: rgba(11, 110, 255, 0.05);\n}\n.preset-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border-color: transparent;\n}\n.success-header {\n  text-align: center;\n  padding: 2rem 1.5rem 1rem;\n}\n.success-icon {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  margin: 0 auto 1rem;\n  animation: scaleIn 0.5s ease-out;\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.success-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #212529;\n  background: none;\n  -webkit-text-fill-color: initial;\n}\n.coupon-details {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.coupon-brand,\n.coupon-amount-display {\n  flex: 1;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 10px;\n  text-align: center;\n}\n.coupon-brand .label,\n.coupon-amount-display .label {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.coupon-brand .value,\n.coupon-amount-display .value {\n  display: block;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #212529;\n}\n.coupon-code-section {\n  margin-bottom: 1.5rem;\n}\n.code-label {\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: #495057;\n}\n.coupon-code-box {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n  border: 2px dashed #0B6EFF;\n  border-radius: 12px;\n}\n.coupon-code {\n  flex: 1;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0B6EFF;\n  letter-spacing: 2px;\n  font-family: "Courier New", monospace;\n}\n.copy-btn {\n  padding: 0.75rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.copy-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(11, 110, 255, 0.3);\n}\n.usage-instructions {\n  background: #f8f9fa;\n  padding: 1.25rem;\n  border-radius: 12px;\n}\n.usage-instructions h4 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #212529;\n}\n.usage-instructions ol {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.usage-instructions li {\n  margin-bottom: 0.75rem;\n  color: #495057;\n  line-height: 1.6;\n}\n.usage-instructions li:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    max-width: 100%;\n    border-radius: 20px 20px 0 0;\n    margin-top: auto;\n    max-height: 95vh;\n  }\n  .modal-header,\n  .modal-body,\n  .modal-footer {\n    padding: 1.25rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n  .coupon-details {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .amount-presets {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=wallet-page.component.css.map */\n';
  }
});

// src/app/features/wallet/wallet-page.component.ts
var WalletPageComponent;
var init_wallet_page_component3 = __esm({
  "src/app/features/wallet/wallet-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_wallet_page_component();
    init_wallet_page_component2();
    init_core();
    init_router();
    init_wallet_service();
    init_toast_service();
    WalletPageComponent = class WalletPageComponent2 {
      walletService;
      router;
      toastService;
      wallet$;
      subscription = {
        active: true,
        plan: "Speaking Practice Premium",
        amount: 699,
        startDate: "2025-11-15",
        endDate: "2025-12-15",
        daysRemaining: 1
      };
      totalPracticeTime = 0;
      totalVerifiedTime = 0;
      // AI-verified time in seconds
      todayPracticeTime = 0;
      // today's practice in seconds
      monthlyTarget = 60 * 60 * 2 * 30;
      // 2 hours daily for 30 days = 3600 seconds
      // Earnings calculation
      earningsPerMinute = 0.19416667;
      // ₹699 / 60 hours = ₹11.65/hour ÷ 60 minutes = ₹0.1942 per minute
      totalEarnings = 0;
      pendingPayout = 0;
      practiceSessions = [
        {
          id: "session-1",
          date: "2025-12-14 10:30 AM",
          duration: 7200,
          verifiedDuration: 6480,
          type: "group-call",
          participants: 8,
          earnings: 20.98
        },
        {
          id: "session-2",
          date: "2025-12-13 09:15 AM",
          duration: 7200,
          verifiedDuration: 6300,
          type: "random-call",
          earnings: 20.39
        },
        {
          id: "session-3",
          date: "2025-12-12 08:45 AM",
          duration: 7200,
          verifiedDuration: 6600,
          type: "group-call",
          participants: 5,
          earnings: 21.36
        },
        {
          id: "session-4",
          date: "2025-12-11 11:00 AM",
          duration: 7200,
          verifiedDuration: 6420,
          type: "random-call",
          earnings: 20.78
        },
        {
          id: "session-5",
          date: "2025-12-10 02:30 PM",
          duration: 7200,
          verifiedDuration: 6540,
          type: "group-call",
          participants: 10,
          earnings: 21.17
        }
      ];
      progressPercentage = 0;
      verificationRate = 0;
      // Modal States
      showCouponModal = signal(false);
      selectedBrand = signal(null);
      couponAmount = signal(0);
      generatedCoupon = signal(null);
      showCouponResultModal = signal(false);
      timerSubscription;
      constructor(walletService, router, toastService) {
        this.walletService = walletService;
        this.router = router;
        this.toastService = toastService;
      }
      goBack() {
        this.router.navigate(["/"]);
      }
      ngOnInit() {
        this.wallet$ = this.walletService.getWallet();
        this.calculateTotals();
        this.updateProgress();
      }
      ngOnDestroy() {
        if (this.timerSubscription) {
          this.timerSubscription.unsubscribe();
        }
      }
      calculateTotals() {
        this.totalPracticeTime = this.practiceSessions.reduce((sum, session) => sum + session.duration, 0);
        this.totalVerifiedTime = this.practiceSessions.reduce((sum, session) => sum + session.verifiedDuration, 0);
        this.totalEarnings = this.practiceSessions.reduce((sum, session) => sum + session.earnings, 0);
        this.todayPracticeTime = this.practiceSessions[0]?.duration || 0;
        this.pendingPayout = this.totalEarnings;
        this.verificationRate = this.totalPracticeTime > 0 ? this.totalVerifiedTime / this.totalPracticeTime * 100 : 0;
      }
      updateProgress() {
        this.progressPercentage = this.totalVerifiedTime / this.monthlyTarget * 100;
        if (this.progressPercentage > 100)
          this.progressPercentage = 100;
      }
      formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);
        const secs = seconds % 60;
        if (hours > 0) {
          return `${hours}h ${minutes}m`;
        } else if (minutes > 0) {
          return `${minutes}m ${secs}s`;
        }
        return `${secs}s`;
      }
      formatTimeDetailed(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);
        return `${hours} hours ${minutes} minutes`;
      }
      getSessionTypeLabel(type) {
        return type === "random-call" ? "Random Call" : "Group Call";
      }
      getVerificationPercentage(session) {
        return session.verifiedDuration / session.duration * 100;
      }
      claimEarnings() {
        if (this.pendingPayout > 0) {
          const amount = this.pendingPayout;
          this.walletService.addFunds(amount, `Speaking practice earnings (${this.formatTimeDetailed(this.totalVerifiedTime)})`).subscribe(() => {
            this.toastService.success(`\u20B9${amount.toFixed(2)} has been credited to your wallet!`);
            this.pendingPayout = 0;
          });
        }
      }
      renewSubscription() {
        this.walletService.spend(699, "Speaking Practice Premium - Monthly Renewal").subscribe(() => {
          this.toastService.success("Subscription renewed successfully!");
          this.subscription.daysRemaining = 30;
        }, (error) => {
          this.toastService.error(error.message || "Insufficient balance. Please add funds.");
        });
      }
      startPracticeSession() {
        this.toastService.info("Redirecting to Community Hub...");
        setTimeout(() => {
          this.router.navigate(["/community"]);
        }, 500);
      }
      openCouponModal(brand, minAmount, maxAmount) {
        this.wallet$.subscribe((wallet) => {
          if (wallet.balance < minAmount) {
            this.toastService.error(`Insufficient balance! You need at least \u20B9${minAmount} to create a ${brand} coupon.`);
            return;
          }
          this.selectedBrand.set({ name: brand, min: minAmount, max: maxAmount });
          this.couponAmount.set(minAmount);
          this.showCouponModal.set(true);
        }).unsubscribe();
      }
      closeCouponModal() {
        this.showCouponModal.set(false);
        this.selectedBrand.set(null);
        this.couponAmount.set(0);
      }
      createCoupon() {
        const brand = this.selectedBrand();
        if (!brand)
          return;
        this.wallet$.subscribe((wallet) => {
          const amount = this.couponAmount();
          if (isNaN(amount) || amount <= 0) {
            this.toastService.error("Please enter a valid amount!");
            return;
          }
          if (amount < brand.min) {
            this.toastService.error(`Minimum coupon amount for ${brand.name} is \u20B9${brand.min}!`);
            return;
          }
          if (amount > brand.max) {
            this.toastService.error(`Maximum coupon amount for ${brand.name} is \u20B9${brand.max}!`);
            return;
          }
          if (amount > wallet.balance) {
            this.toastService.error(`Insufficient balance! You only have \u20B9${wallet.balance.toFixed(2)} in your wallet.`);
            return;
          }
          const couponCode = `VRE${brand.name.substring(0, 3).toUpperCase()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
          this.walletService.spend(amount, `${brand.name.charAt(0).toUpperCase() + brand.name.slice(1)} coupon created`).subscribe(() => {
            this.generatedCoupon.set({ code: couponCode, amount, brand: brand.name });
            this.closeCouponModal();
            this.showCouponResultModal.set(true);
            this.toastService.success("Coupon created successfully!");
          }, (error) => {
            this.toastService.error(error.message || "Failed to create coupon. Please try again.");
          });
        }).unsubscribe();
      }
      closeCouponResultModal() {
        this.showCouponResultModal.set(false);
        this.generatedCoupon.set(null);
      }
      copyCouponCode() {
        const coupon = this.generatedCoupon();
        if (coupon) {
          navigator.clipboard.writeText(coupon.code);
          this.toastService.success("Coupon code copied to clipboard!");
        }
      }
      static ctorParameters = () => [
        { type: WalletService },
        { type: Router },
        { type: ToastService }
      ];
    };
    WalletPageComponent = __decorate([
      Component({
        selector: "app-wallet-page",
        template: wallet_page_component_default,
        standalone: false,
        styles: [wallet_page_component_default2]
      })
    ], WalletPageComponent);
  }
});

// src/app/features/wallet/wallet-page.component.spec.ts
var require_wallet_page_component_spec = __commonJS({
  "src/app/features/wallet/wallet-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_esm();
    init_wallet_page_component3();
    init_wallet_service();
    init_toast_service();
    describe("WalletPageComponent", () => {
      let component;
      let fixture;
      let mockWalletService;
      let mockRouter;
      let mockToastService;
      beforeEach(() => __async(null, null, function* () {
        mockWalletService = jasmine.createSpyObj("WalletService", ["getWallet"]);
        mockWalletService.getWallet.and.returnValue(of({ balance: 1e3, transactions: [] }));
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        mockToastService = jasmine.createSpyObj("ToastService", ["success", "error", "warning", "info"]);
        yield TestBed.configureTestingModule({
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
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should load wallet data on init", () => {
        expect(mockWalletService.getWallet).toHaveBeenCalled();
      });
    });
  }
});
export default require_wallet_page_component_spec();
//# sourceMappingURL=spec-app-features-wallet-wallet-page.component.spec.js.map
