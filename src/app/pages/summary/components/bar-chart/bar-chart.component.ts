import { Component, Input, OnInit } from '@angular/core';
import { ChartData, PaymentMap, Transaction } from 'src/app/models';
import { MediaQueryService, generatePastelColor } from 'src/app/shared';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() transactions!: Transaction[];

  data!: ChartData;

  ngOnInit() {
    const brandAmountMap = this.mapBrandAmount(this.transactions);
    const totalAmount = this.getTotalAmount(this.transactions);

    this.data = {
      labels: [''],
      datasets: Object.keys(brandAmountMap).map((brand) => {
        return {
          label: brand,
          backgroundColor: generatePastelColor(),
          data: [(brandAmountMap[brand] / totalAmount) * 100],
        };
      }),
    };
  }

  private mapBrandAmount(items: Transaction[]): PaymentMap {
    const cardBrandMap: PaymentMap = {};

    for (const item of items) {
      const cardBrand = item.cardBrand;
      if (cardBrandMap[cardBrand]) {
        cardBrandMap[cardBrand] += item.grossAmount;
      } else {
        cardBrandMap[cardBrand] = item.grossAmount;
      }
    }
    return cardBrandMap;
  }

  private getTotalAmount(transactions: Transaction[]) {
    return transactions.reduce((acc, current) => acc + current.grossAmount, 0);
  }
}
