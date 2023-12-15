import { Component, Input, OnInit } from '@angular/core';
import { ChartData, PaymentMap, Transaction } from 'src/app/models';
import { generatePastelColors } from 'src/app/shared';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements OnInit {
  @Input() transactions!: Transaction[];

  data!: ChartData;

  ngOnInit() {
    const cardBrandMap = this.mapCardBrand(this.transactions);
    const brandLength = Object.keys(cardBrandMap).length;

    this.data = {
      labels: Object.keys(cardBrandMap),
      datasets: [
        {
          data: Object.values(cardBrandMap).map(
            (value: number) => (value / this.transactions.length) * 100
          ),
          backgroundColor: generatePastelColors(brandLength),
        },
      ],
    };
  }

  private mapCardBrand(items: Transaction[]): PaymentMap {
    const cardBrandMap: PaymentMap = {};

    for (const item of items) {
      const cardBrand = item.cardBrand;

      if (cardBrandMap[cardBrand]) {
        cardBrandMap[cardBrand]++;
      } else {
        cardBrandMap[cardBrand] = 1;
      }
    }
    return cardBrandMap;
  }
}
