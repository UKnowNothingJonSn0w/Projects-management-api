import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('addProjectModal', { static: true }) addProjectModal!: TemplateRef<any>; 


  public projects: any = [];

  constructor(
    private PagesService: PagesService,
    private router: Router,
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.loadData();
  }
   
  loadData() {
    this.PagesService.LoadProject().subscribe(response => {
      console.log(response);
      this.projects = response;
    });
  }

  openAddProjectModal(): void {
    this.modalService.open(this.addProjectModal, { centered: true });
  }

}
