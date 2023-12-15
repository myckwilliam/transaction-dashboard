import { TestBed } from '@angular/core/testing';
import { MediaQueryService } from './media-query.service';
import { SidebarModule } from 'primeng/sidebar';
describe('MediaQueryService', () => {
  let mediaQueryService: MediaQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaQueryService],
      imports: [SidebarModule],
    });

    mediaQueryService = TestBed.inject(MediaQueryService);
  });

  it('should be created', () => {
    expect(mediaQueryService).toBeTruthy();
  });

  it('should detect desktop media query correctly', (done) => {
    mediaQueryService.isDesktop$.subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should detect tablet media query correctly', (done) => {
    mediaQueryService.isTablet$.subscribe((result) => {
      console.log({ tablet: result });
      expect(result).toBe(false);
      done();
    });
  });

  it('should detect mobile media query correctly', (done) => {
    mediaQueryService.isMobile$.subscribe((result) => {
      console.log({ mobile: result });
      expect(result).toBe(false);
      done();
    });
  });
});
