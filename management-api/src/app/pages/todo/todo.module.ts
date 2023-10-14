
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent } from './todo.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class TodoModule {}
