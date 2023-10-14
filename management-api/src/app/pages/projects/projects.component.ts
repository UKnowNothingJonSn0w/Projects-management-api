import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  @ViewChild('addProjectModal', { static: true }) addProjectModal!: TemplateRef<any>;

  public projects: any = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private pagesService: PagesService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadData() {
    this.subscriptions.push(
      this.pagesService.LoadProject().subscribe(response => {
        console.log(response);
        this.projects = response;
      })
    );
  }

  openAddProjectModal(): void {
    this.modalService.open(this.addProjectModal, { centered: true });
  }
}
