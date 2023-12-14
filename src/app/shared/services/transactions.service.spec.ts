import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TransactionsService } from './transactions.service';
import { TransactionData } from 'src/app/models';
import { SidebarModule } from 'primeng/sidebar';
import { HttpErrorResponse } from '@angular/common/http';

const transactionData = {
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

describe('TransactionsService', () => {
  let service: TransactionsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SidebarModule],
      providers: [TransactionsService],
    });

    service = TestBed.inject(TransactionsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return transactions', () => {
    const mockTransactions: TransactionData = transactionData;

    service.getTransactions().subscribe((transactions) => {
      expect(transactions).toEqual(mockTransactions);
    });

    const req = httpTestingController.expectOne('/api/transactions');
    expect(req.request.method).toEqual('GET');

    req.flush(mockTransactions);
  });

  it('should return cached transactions if available', () => {
    const mockTransactions: TransactionData = transactionData;

    service.getTransactions().subscribe();
    service.getTransactions().subscribe((transactions) => {
      expect(transactions).toEqual(mockTransactions);
    });

    const req = httpTestingController.expectOne('/api/transactions');
    expect(req.request.method).toEqual('GET');

    req.flush(mockTransactions);
  });

  it('should handle errors', () => {
    const errorMessage = 'Http failure response for /api/transactions: 0 ';

    service.getTransactions().subscribe(
      () => fail('Expected an error, but did not get one'),
      (error: HttpErrorResponse) => {
        expect(error.message).toEqual(errorMessage);
      }
    );

    const req = httpTestingController.expectOne('/api/transactions');
    req.error(new ErrorEvent('error', { message: errorMessage }));
  });
});
