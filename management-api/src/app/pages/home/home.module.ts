
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent } from './home.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class HomeModule {}
