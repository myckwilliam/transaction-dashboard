import { Component, Input, OnInit } from '@angular/core';
import { ChartData, PaymentTypeMap, Transaction } from 'src/app/models';
import { generatePastelColors } from 'src/app/shared';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() transactions!: Transaction[];

  data!: ChartData;

  chartOptions: any;

  ngOnInit() {
    const paymenMap = this.mapPaymentFrequency(this.transactions);
    const mapLength = Object.keys(paymenMap).length;

    this.data = {
      labels: Object.keys(paymenMap),
      datasets: [
        {
          data: Object.values(paymenMap).map((value) => value / mapLength),
          backgroundColor: generatePastelColors(mapLength),
        },
      ],
    };
  }

  private mapPaymentFrequency(items: Transaction[]): PaymentTypeMap {
    const paymentMap: PaymentTypeMap = {};

    for (const item of items) {
      const paymentType = item.paymentType;

      if (paymentMap[paymentType]) {
        paymentMap[paymentType]++;
      } else {
        paymentMap[paymentType] = 1;
      }
    }
    return paymentMap;
  }
}
