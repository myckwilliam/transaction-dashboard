import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './feature/summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { SharedModule } from 'src/app/shared';
import { TotalCardsComponent } from './components/total-cards/total-cards.component';
import { ChartModule } from 'primeng/chart';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { ChartsComponent } from './components/charts/charts.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    SummaryComponent,
    TotalCardsComponent,
    DonutChartComponent,
    ChartsComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [CommonModule, SummaryRoutingModule, SharedModule, ChartModule],
})
export class SummaryModule {}
