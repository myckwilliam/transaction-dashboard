import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './feature/summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { SharedModule } from 'src/app/shared';
import { TotalCardsComponent } from './feature/components/total-cards/total-cards.component';
import { ChartModule } from 'primeng/chart';
import { DonutChartComponent } from './feature/components/donut-chart/donut-chart.component';
import { ChartsComponent } from './feature/components/charts/charts.component';

@NgModule({
  declarations: [
    SummaryComponent,
    TotalCardsComponent,
    DonutChartComponent,
    ChartsComponent,
  ],
  imports: [CommonModule, SummaryRoutingModule, SharedModule, ChartModule],
})
export class SummaryModule {}
