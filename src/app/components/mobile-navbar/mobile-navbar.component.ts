import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css'],
})
export class MobileNavbarComponent {
  visibleSidebar = false;

  togleSidebar(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
