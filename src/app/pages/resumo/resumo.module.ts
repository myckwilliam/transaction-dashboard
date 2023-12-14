import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumoComponent } from './feature/resumo.component';
import { ResumoRoutingModule } from './resumo-routing.module';

@NgModule({
  declarations: [ResumoComponent],
  imports: [CommonModule, ResumoRoutingModule],
})
export class ResumoModule {}
