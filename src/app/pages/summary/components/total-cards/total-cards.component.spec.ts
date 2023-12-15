import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalCardsComponent } from './total-cards.component';
import { Component, Input } from '@angular/core';
import { TransactionSummary } from 'src/app/models';

@Component({
  template: `<app-total-cards [summary]="testSummary"></app-total-cards>`,
})
class TestHostComponent {
  testSummary: TransactionSummary = {
    totalQuantity: 10,
    totalAmount: 1000,
    totalNetAmount: 900,
    totalAverageAmount: 90,
    initialDate: '2021-05-26',
    finalDate: '2021-05-26',
  };
}

@Component({
  selector: 'app-card',
  template: '<ng-content></ng-content>',
})
class CardStubComponent {}

describe('TotalCardsComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCardsComponent, TestHostComponent, CardStubComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(hostComponent).toBeTruthy();
  });
});
