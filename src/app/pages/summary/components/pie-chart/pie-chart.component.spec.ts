import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import { Component } from '@angular/core';
import { Transaction } from 'src/app/models';
import { ChartModule } from 'primeng/chart';

@Component({
  template: `<app-pie-chart [transactions]="testTransactions"></app-pie-chart>`,
})
class TestHostComponent {
  testTransactions: Transaction[] = [
    {
      id: '114606514478703',
      merchantId: '2000463023',
      paymentNode: 485173,
      cnpjRoot: 485116,
      date: '2021-05-26T12:12:55',
      paymentType: 'Crédito à vista',
      cardBrand: 'Mastercard',
      authorizationCode: '378216',
      truncatedCardNumber: '1014',
      grossAmount: 80,
      netAmount: 76.88,
      terminal: '00032668',
      administrationFee: 3.9,
      channelCode: 15,
      channel: 'Super Link / Digitada',
      withdrawAmount: 0,
      minimumMDRAmmount: -3.12,
      mdrTaxAmount: 0,
      mdrFeeAmount: -3.12,
      status: 'Aprovada',
    },
    {
      id: '114606514478704',
      merchantId: '2000463023',
      paymentNode: 485173,
      cnpjRoot: 485116,
      date: '2021-05-26T12:12:55',
      paymentType: 'Crédito à vista',
      cardBrand: 'Mastercard',
      authorizationCode: '378218',
      truncatedCardNumber: '1014',
      grossAmount: 80,
      netAmount: 76.88,
      terminal: '00032668',
      administrationFee: 3.9,
      channelCode: 15,
      channel: 'Super Link / Digitada',
      withdrawAmount: 0,
      minimumMDRAmmount: -3.12,
      mdrTaxAmount: 0,
      mdrFeeAmount: -3.12,
      status: 'Aprovada',
    },
    {
      id: '114606514478705',
      merchantId: '2000463023',
      paymentNode: 485173,
      cnpjRoot: 485116,
      date: '2021-05-26T12:12:55',
      paymentType: 'Crédito à vista',
      cardBrand: 'Mastercard',
      authorizationCode: '378224',
      truncatedCardNumber: '1014',
      grossAmount: 90,
      netAmount: 86.49,
      terminal: '00032668',
      administrationFee: 3.9,
      channelCode: 15,
      channel: 'Super Link / Digitada',
      withdrawAmount: 0,
      minimumMDRAmmount: -3.51,
      mdrTaxAmount: 0,
      mdrFeeAmount: -3.51,
      status: 'Aprovada',
    },
  ];
}
describe('PieChartComponent', () => {
  let pieChartComponent: PieChartComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule],
      declarations: [PieChartComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    pieChartComponent = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(pieChartComponent).toBeTruthy();
  });

  it('should initialize data based on provided transactions', () => {
    pieChartComponent.ngOnInit();
    fixture.detectChanges();

    expect(pieChartComponent.data).toBeTruthy();
  });
});
