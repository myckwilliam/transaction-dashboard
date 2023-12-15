import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Transaction } from 'src/app/models';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css'],
})
export class DetailDialogComponent implements OnInit {
  transaction!: Transaction;

  constructor(private config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.transaction = this.config.data;
  }
}
