import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  public project: any = {};
  private subscriptions: Subscription[] = [];

  constructor(
    private pagesService: PagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        const projectId = +params['id'];

        this.subscriptions.push(
          this.pagesService.LoadProject().subscribe(response => {
            console.log(response);
            this.project = response.find((proj: any) => proj.id === projectId);
          })
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
