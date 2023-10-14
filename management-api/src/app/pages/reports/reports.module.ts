
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsComponent } from './reports.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class ReportsModule {}
