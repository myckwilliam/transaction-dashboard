import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './home/data-access/services/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(console.log);
  }
}
