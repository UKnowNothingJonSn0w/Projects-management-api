
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    NgbModalModule, 
  ],
})
export class ProjectsModule {}
