import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailDialogComponent } from './detail-dialog.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

describe('DetailDialogComponent', () => {
  let fixture: ComponentFixture<DetailDialogComponent>;
  let component: DetailDialogComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDialogComponent],
      providers: [
        DynamicDialogConfig,
        // Mock do DynamicDialogConfig para fornecer dados simulados
        {
          provide: DynamicDialogConfig,
          useValue: {
            data: {
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
          },
        },
      ],
    });

    fixture = TestBed.createComponent(DetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display transaction details in the HTML', () => {
    const element: HTMLElement = fixture.nativeElement;

    // Adicione expectativas para verificar se os detalhes da transação são exibidos corretamente
    expect(element.textContent).toContain('Id: 114606514478703');
    expect(element.textContent).toContain('Id do Mercador: 2000463023');
    // ... outras expectativas conforme necessário
  });

  // Adicione mais testes conforme necessário para verificar a renderização dos detalhes da transação.
});
