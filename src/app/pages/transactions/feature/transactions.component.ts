import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionData } from 'src/app/models';
import { TransactionsService } from 'src/app/shared';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions$!: Observable<TransactionData>;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactions();
  }
}
