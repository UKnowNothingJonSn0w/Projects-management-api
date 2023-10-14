
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdministrationModule],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class AdministrationModule {}
