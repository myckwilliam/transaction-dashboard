import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileNavbarComponent } from './mobile-navbar.component';

describe('MobileNavbarComponent', () => {
  let component: MobileNavbarComponent;
  let fixture: ComponentFixture<MobileNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavbarComponent],
    });

    fixture = TestBed.createComponent(MobileNavbarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize visibleSidebar to false', () => {
    expect(component.visibleSidebar).toBeFalse();
  });

  it('should toggle visibleSidebar on toggleSidebar() call', () => {
    expect(component.visibleSidebar).toBeFalse();

    component.togleSidebar();
    expect(component.visibleSidebar).toBeTrue();

    component.togleSidebar();
    expect(component.visibleSidebar).toBeFalse();
  });
});
