import { Component, Input, OnInit } from '@angular/core';
import { ChartData, PaymentMap, Transaction } from 'src/app/models';
import { generatePastelColors } from 'src/app/shared';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() transactions!: Transaction[];

  data!: ChartData;

  ngOnInit() {
    const paymentMap = this.mapPaymentFrequency(this.transactions);
    const mapLength = Object.keys(paymentMap).length;

    this.data = {
      labels: Object.keys(paymentMap),
      datasets: [
        {
          data: Object.values(paymentMap).map(
            (value) => (value / this.transactions.length) * 100
          ),
          backgroundColor: generatePastelColors(mapLength),
        },
      ],
    };
  }

  private mapPaymentFrequency(items: Transaction[]): PaymentMap {
    const paymentMap: PaymentMap = {};

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
