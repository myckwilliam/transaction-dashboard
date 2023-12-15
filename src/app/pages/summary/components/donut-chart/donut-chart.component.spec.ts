import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartComponent } from './donut-chart.component';
import { Component } from '@angular/core';
import { Transaction } from 'src/app/models';

@Component({
  template: `<app-donut-chart
    [transactions]="testTransactions"
  ></app-donut-chart>`,
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

describe('DonutChartComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let donutChartComponent: DonutChartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutChartComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    donutChartComponent = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(donutChartComponent).toBeTruthy();
  });

  it('should initialize data based on provided transactions', () => {
    donutChartComponent.ngOnInit();
    fixture.detectChanges();

    expect(donutChartComponent.data).toBeTruthy();
  });
});
