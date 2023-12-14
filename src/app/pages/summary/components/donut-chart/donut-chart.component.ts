import { Component, OnInit } from '@angular/core';
import { generatePastelColors } from 'src/app/shared';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  data: any;

  chartOptions: any;

  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: generatePastelColors(3),
        },
      ],
    };
  }
}
