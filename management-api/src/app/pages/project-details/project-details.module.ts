
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectDetailsComponent } from './project-details.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class ProjectDetailsModule {}
