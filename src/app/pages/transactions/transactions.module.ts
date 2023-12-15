import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './feature/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { SharedModule } from 'src/app/shared';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { TransactionsTableComponent } from './feature/components/transactions-table/transactions-table.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DetailDialogComponent } from './feature/components/detail-dialog/detail-dialog.component';

@NgModule({
  declarations: [TransactionsComponent, TransactionsTableComponent, DetailDialogComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    DynamicDialogModule,
    ButtonModule,
    TooltipModule,
  ],
})
export class TransactionsModule {}
