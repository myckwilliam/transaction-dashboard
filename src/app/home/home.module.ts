import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './feature/home.component';
import { Router, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
