import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransactionData, TransactionSummary } from 'src/app/models';
import { TransactionsService } from 'src/app/shared';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  transactions$!: Observable<TransactionData>;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactions();
  }
}
