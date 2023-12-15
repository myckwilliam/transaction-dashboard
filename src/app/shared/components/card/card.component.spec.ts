import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  template: `
    <app-card>
      <div id="test-content">Test Content</div>
    </app-card>
  `,
})
class TestHostComponent {}

describe('CardComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the provided content', () => {
    const testContentElement: HTMLElement =
      fixture.nativeElement.querySelector('#test-content');
    expect(testContentElement.textContent).toContain('Test Content');
  });
});
