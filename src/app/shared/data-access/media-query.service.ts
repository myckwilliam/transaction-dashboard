import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  isDesktop$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isMobile$: Observable<boolean>;

  constructor() {
    this.isDesktop$ = this.listenToMatches('(min-width: 1024px)');
    this.isTablet$ = this.listenToMatches(
      '(min-width: 768px) and (max-width: 1023px)'
    );
    this.isMobile$ = this.listenToMatches('(max-width: 767px)');
  }

  listenToMatches(query: string) {
    const mediaQueryList = window.matchMedia(query);
    const subject = new BehaviorSubject<boolean>(false);

    subject.next(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', (event) =>
      subject.next(event.matches)
    );

    return subject.asObservable();
  }
}
