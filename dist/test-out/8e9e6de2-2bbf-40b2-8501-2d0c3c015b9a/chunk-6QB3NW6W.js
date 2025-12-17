import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6,
  of
} from "./chunk-EI44HNNH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/core/services/wallet.service.ts
var WalletService;
var init_wallet_service = __esm({
  "src/app/core/services/wallet.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    WalletService = class WalletService2 {
      walletSubject = new BehaviorSubject({ balance: 0, transactions: [] });
      wallet$ = this.walletSubject.asObservable();
      NON_WITHDRAWABLE_RULE = "Withdrawals are not allowed. Wallet balance can be used for subscriptions or coupon generation.";
      constructor() {
        this.initializeMockWallet();
      }
      initializeMockWallet() {
        const state = {
          balance: 250,
          transactions: [
            { id: "tx-1", type: "credit", amount: 200, description: "Initial top-up", date: new Date(Date.now() - 864e5).toISOString() },
            { id: "tx-2", type: "debit", amount: 50, description: "Course enrollment: Interview Simulation", date: (/* @__PURE__ */ new Date()).toISOString() }
          ]
        };
        this.walletSubject.next(state);
      }
      getWallet() {
        return this.wallet$;
      }
      addFunds(amount, description = "Wallet top-up") {
        if (amount <= 0) {
          throw new Error("Amount must be positive");
        }
        const current = this.walletSubject.value;
        const updated = {
          balance: current.balance + amount,
          transactions: [
            { id: `tx-${Date.now()}`, type: "credit", amount, description, date: (/* @__PURE__ */ new Date()).toISOString() },
            ...current.transactions
          ]
        };
        this.walletSubject.next(updated);
        return of(updated);
      }
      spend(amount, description) {
        const current = this.walletSubject.value;
        if (amount <= 0)
          throw new Error("Amount must be positive");
        if (current.balance < amount)
          throw new Error("Insufficient balance");
        const updated = {
          balance: current.balance - amount,
          transactions: [
            { id: `tx-${Date.now()}`, type: "debit", amount, description, date: (/* @__PURE__ */ new Date()).toISOString() },
            ...current.transactions
          ]
        };
        this.walletSubject.next(updated);
        return of(updated);
      }
      attemptWithdraw(amount) {
        return { success: false, message: this.NON_WITHDRAWABLE_RULE };
      }
      getRules() {
        return [
          "Money added to wallet is NON-WITHDRAWABLE.",
          "Allowed uses: (1) automatic next-month subscription payments; (2) creating brand-sponsored coupons (admin-configured min/max)."
        ];
      }
      static ctorParameters = () => [];
    };
    WalletService = __decorate([
      Injectable({ providedIn: "root" })
    ], WalletService);
  }
});

export {
  WalletService,
  init_wallet_service
};
//# sourceMappingURL=chunk-6QB3NW6W.js.map
