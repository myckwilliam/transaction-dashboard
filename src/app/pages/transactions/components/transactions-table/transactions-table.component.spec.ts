import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsTableComponent } from './transactions-table.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Transaction } from 'src/app/models';
import { TableModule } from 'primeng/table';

describe('TransactionsTableComponent', () => {
  let fixture: ComponentFixture<TransactionsTableComponent>;
  let component: TransactionsTableComponent;
  let dialogService: DialogService;
  let mockTransactions: Transaction[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsTableComponent],
      imports: [TableModule],
      providers: [DialogService],
    });

    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.inject(DialogService);

    mockTransactions = [
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
    ];
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the transactions table', () => {
    component.transactions = mockTransactions;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    console.log(element);

    expect(element.textContent).toContain('Transações');
  });

  it('should render the transactions table with proper data', () => {
    component.transactions = mockTransactions;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Status');
  });
});
