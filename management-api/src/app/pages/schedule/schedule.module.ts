
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleComponent } from './schedule.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class ScheduleModule {}
