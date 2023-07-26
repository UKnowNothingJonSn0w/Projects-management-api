import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProjectsComponent } from './projects/projects.component';
import { PagesService } from '../pages/pages.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ScheduleComponent,
   
  ],


  imports: [
    ModalModule.forRoot(),
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatExpansionModule
  ],

  providers: [PagesService],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
