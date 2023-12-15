import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MediaQueryService } from 'src/app/shared'; // Substitua pelo caminho real do seu serviço
import { BehaviorSubject, of } from 'rxjs';
import { SidebarModule } from 'primeng/sidebar';

class MediaQueryServiceStub {
  isDesktop$ = of(true); // Simule o valor inicial do isDesktop$ como true
  isTablet$ = of(false); // Simule o valor inicial do isTablet$ como false
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mediaQueryService: MediaQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [SidebarModule],
      providers: [
        { provide: MediaQueryService, useClass: MediaQueryServiceStub },
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mediaQueryService = TestBed.inject(MediaQueryService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isDesktop$ and isTablet$ from the mediaQueryService', () => {
    fixture.detectChanges();

    expect(component.isDesktop$).toBeDefined();
    expect(component.isTablet$).toBeDefined();
  });

  it('should conditionally render the mobile-navbar based on isDesktop$', () => {
    const mediaQueryServiceStub = TestBed.inject(
      MediaQueryService
    ) as MediaQueryServiceStub;
    mediaQueryServiceStub.isDesktop$ = of(false);

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-mobile-navbar')).toBeTruthy();
    expect(element.querySelector('.main-content')).toBeTruthy();
    expect(element.querySelector('app-sidebar')).toBeFalsy();
  });

  it('should conditionally render the sidebar based on isDesktop$', () => {
    const mediaQueryServiceStub = TestBed.inject(
      MediaQueryService
    ) as MediaQueryServiceStub;
    mediaQueryServiceStub.isDesktop$ = of(true);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-mobile-navbar')).toBeFalsy();
    expect(element.querySelector('.main-content')).toBeTruthy();
    expect(element.querySelector('app-sidebar')).toBeTruthy();
  });
});
