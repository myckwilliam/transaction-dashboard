import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionData } from 'src/app/models/transaction.data';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseURL = '/api';
  private transactions$: Observable<TransactionData> | null = null;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<TransactionData> {
    const endpoint = `${this.baseURL}/transactions`;

    if (this.transactions$) {
      return this.transactions$;
    }

    this.transactions$ = this.http
      .get<TransactionData>(endpoint)
      .pipe(shareReplay(1));

    return this.transactions$;
  }
}
