import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './feature/summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, SummaryRoutingModule, SharedModule],
})
export class SummaryModule {}
