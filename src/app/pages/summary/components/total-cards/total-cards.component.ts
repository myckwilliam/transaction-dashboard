import { Component, Input, OnInit } from '@angular/core';
import { TransactionSummary } from 'src/app/models';

@Component({
  selector: 'app-total-cards',
  templateUrl: './total-cards.component.html',
  styleUrls: ['./total-cards.component.css'],
})
export class TotalCardsComponent {
  @Input() summary!: TransactionSummary;
}
