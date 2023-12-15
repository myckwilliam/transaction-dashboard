import { Pagination } from './../../../models/pagination';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { TransactionData } from 'src/app/models';
import { TransactionsService } from 'src/app/shared';

@Component({
  template: '<app-summary></app-summary>',
})
class TestHostComponent {}

class TransactionsServiceStub {
  getTransactions() {
    // Substitua este valor pelo que você deseja retornar no teste
    const mockTransactionData: TransactionData = {
      summary: {
        totalQuantity: 10,
        totalAmount: 1000,
        totalNetAmount: 900,
        totalAverageAmount: 90,
        initialDate: '2021-05-26',
        finalDate: '2021-05-26',
      },
      items: [],
      pagination: {
        pageNumber: 60,
        pageSize: 25,
        totalElements: 1546,
        numPages: 62,
        lastPage: false,
        firstPage: false,
      },
    };
    return of(mockTransactionData);
  }
}

describe('SummaryComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let transactionsService: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryComponent, TestHostComponent],
      providers: [
        { provide: TransactionsService, useClass: TransactionsServiceStub },
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    transactionsService = TestBed.inject(TransactionsService);
  });

  it('should create the component', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should fetch and display transaction data', fakeAsync(() => {
    const mockTransactionData: TransactionData = {
      summary: {
        totalQuantity: 10,
        totalAmount: 1000,
        totalNetAmount: 900,
        totalAverageAmount: 90,
        initialDate: '2021-05-26',
        finalDate: '2021-05-26',
      },
      items: [],
      pagination: {
        pageNumber: 60,
        pageSize: 25,
        totalElements: 1546,
        numPages: 62,
        lastPage: false,
        firstPage: false,
      },
    };

    spyOn(transactionsService, 'getTransactions').and.returnValue(
      of(mockTransactionData)
    );

    fixture.detectChanges();
    tick();

    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h2')!.textContent).toContain(
      'Resumo das Transações'
    );
  }));
});
