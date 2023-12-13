import { MediaQueryService } from 'src/app/shared';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDesktop$!: Observable<boolean>;
  isTablet$!: Observable<boolean>;

  constructor(private mediaQueryService: MediaQueryService) {}

  ngOnInit(): void {
    this.isDesktop$ = this.mediaQueryService.isDesktop$;
    this.isTablet$ = this.mediaQueryService.isTablet$;
  }
}
