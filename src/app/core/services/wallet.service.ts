import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface WalletTransaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
}

export interface WalletState {
  balance: number;
  transactions: WalletTransaction[];
}

@Injectable({ providedIn: 'root' })
export class WalletService {
  private walletSubject = new BehaviorSubject<WalletState>({ balance: 0, transactions: [] });
  wallet$ = this.walletSubject.asObservable();

  private readonly NON_WITHDRAWABLE_RULE = 'Withdrawals are not allowed. Wallet balance can be used for subscriptions or coupon generation.';

  constructor() {
    this.initializeMockWallet();
  }

  private initializeMockWallet(): void {
    const state: WalletState = {
      balance: 250,
      transactions: [
        { id: 'tx-1', type: 'credit', amount: 200, description: 'Initial top-up', date: new Date(Date.now() - 86400000).toISOString() },
        { id: 'tx-2', type: 'debit', amount: 50, description: 'Course enrollment: Interview Simulation', date: new Date().toISOString() }
      ]
    };
    this.walletSubject.next(state);
  }

  getWallet(): Observable<WalletState> {
    return this.wallet$;
  }

  addFunds(amount: number, description = 'Wallet top-up'): Observable<WalletState> {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }

    const current = this.walletSubject.value;
    const updated: WalletState = {
      balance: current.balance + amount,
      transactions: [
        { id: `tx-${Date.now()}`, type: 'credit', amount, description, date: new Date().toISOString() },
        ...current.transactions
      ]
    };
    this.walletSubject.next(updated);
    return of(updated);
  }

  spend(amount: number, description: string): Observable<WalletState> {
    const current = this.walletSubject.value;
    if (amount <= 0) throw new Error('Amount must be positive');
    if (current.balance < amount) throw new Error('Insufficient balance');

    const updated: WalletState = {
      balance: current.balance - amount,
      transactions: [
        { id: `tx-${Date.now()}`, type: 'debit', amount, description, date: new Date().toISOString() },
        ...current.transactions
      ]
    };
    this.walletSubject.next(updated);
    return of(updated);
  }

  attemptWithdraw(amount: number): { success: false; message: string } {
    return { success: false, message: this.NON_WITHDRAWABLE_RULE };
  }

  getRules(): string[] {
    return [
      'Money added to wallet is NON-WITHDRAWABLE.',
      'Allowed uses: (1) automatic next-month subscription payments; (2) creating brand-sponsored coupons (admin-configured min/max).'
    ];
  }
}