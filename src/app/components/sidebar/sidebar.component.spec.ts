import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'router-link',
  template: '<ng-content></ng-content>',
})
class RouterLinkStub {}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent, RouterLinkStub],
    });

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default height if not provided', () => {
    expect(component.height).toBe('95vh');
  });

  it('should set provided height', () => {
    component.height = '100vh';
    fixture.detectChanges();
    expect(component.height).toBe('100vh');
  });
});
