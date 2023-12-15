import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsComponent } from './charts.component';
import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models';

@Component({
  template: `<app-charts [transactions]="testTransactions"></app-charts>`,
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

@Component({
  selector: 'app-card',
  template: '<ng-content></ng-content>',
})
class CardStubComponent {}

@Component({
  selector: 'app-pie-chart',
  template: '',
})
class PieChartStubComponent {
  @Input() transactions!: Transaction[];
}

@Component({
  selector: 'app-donut-chart',
  template: '',
})
class DonutChartStubComponent {
  @Input() transactions!: Transaction[];
}

@Component({
  selector: 'app-bar-chart',
  template: '',
})
class BarChartStubComponent {
  @Input() transactions!: Transaction[];
}

describe('ChartsComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartsComponent,
        TestHostComponent,
        CardStubComponent,
        PieChartStubComponent,
        DonutChartStubComponent,
        BarChartStubComponent,
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(hostComponent).toBeTruthy();
  });
});
