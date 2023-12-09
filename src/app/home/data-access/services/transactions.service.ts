import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionData } from 'src/app/models/transaction.data';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseURL = 'localhost:3000';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<TransactionData> {
    const endpoint = `${this.baseURL}/transactions`;
    return this.http.get<TransactionData>(endpoint);
  }
}
