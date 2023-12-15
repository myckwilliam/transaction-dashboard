import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Transaction } from 'src/app/models';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
  providers: [DialogService],
})
export class TransactionsTableComponent {
  @Input() transactions!: Transaction[];

  constructor(private dialogService: DialogService) {}

  getSeverity(status: string): string {
    switch (status) {
      case 'Aprovada':
        return '';
      case 'Negada':
        return 'danger';
      default:
        return 'warning';
    }
  }

  openDetailDialog(data: Transaction) {
    this.dialogService.open(DetailDialogComponent, {
      header: 'Detalhes',
      data,
      style: { maxHeight: '600px', width: '700px', maxWidth: '95vw' },
    });
  }
}
