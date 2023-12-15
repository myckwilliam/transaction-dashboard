import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { of } from 'rxjs';
import { TransactionData } from 'src/app/models';
import { TransactionsService } from 'src/app/shared';

class TransactionsServiceStub {
  getTransactions() {
    // Retorne um Observable simulado para os testes
    return of({
      summary: {
        totalQuantity: 1546,
        totalAmount: 313388,
        totalNetAmount: 301847.02,
        totalAverageAmount: 202.71,
        initialDate: '2021-05-26',
        finalDate: '2021-05-26',
      },
      pagination: {
        pageNumber: 60,
        pageSize: 25,
        totalElements: 1546,
        numPages: 62,
        lastPage: false,
        firstPage: false,
      },
      items: [
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
      ],
    } as TransactionData);
  }
}

describe('TransactionsComponent', () => {
  let fixture: ComponentFixture<TransactionsComponent>;
  let component: TransactionsComponent;
  let transactionsService: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      providers: [
        { provide: TransactionsService, useClass: TransactionsServiceStub },
      ],
    });

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    transactionsService = TestBed.inject(TransactionsService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch transactions data from the service', () => {
    spyOn(transactionsService, 'getTransactions').and.callThrough();

    fixture.detectChanges();

    expect(transactionsService.getTransactions).toHaveBeenCalled();
  });

  it('should render the transactions table with data', () => {
    const mockTransactionData: TransactionData = {
      summary: {
        totalQuantity: 1546,
        totalAmount: 313388,
        totalNetAmount: 301847.02,
        totalAverageAmount: 202.71,
        initialDate: '2021-05-26',
        finalDate: '2021-05-26',
      },
      pagination: {
        pageNumber: 60,
        pageSize: 25,
        totalElements: 1546,
        numPages: 62,
        lastPage: false,
        firstPage: false,
      },
      items: [
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
      ],
    };

    spyOn(transactionsService, 'getTransactions').and.returnValue(
      of(mockTransactionData)
    );

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Tabela de Transações');
    expect(element.textContent).toContain('26/05/2021');
  });
});
