import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/shared';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  basicData: any;

  basicOptions: any;

  ngOnInit() {
    this.basicData = {
      labels: ['January'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [10],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#f00',
          data: [65],
        },
        {
          label: 'My Third dataset',
          backgroundColor: '#0f0',
          data: [40],
        },
        {
          label: 'My Forth dataset',
          backgroundColor: '#00f',
          data: [90],
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
