import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: any = [];

  constructor(
    private PagesService: PagesService,
    private router: Router,
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

}
