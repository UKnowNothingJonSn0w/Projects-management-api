import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  public project: any = {}; // Przechowuje informacje tylko dla danego projektu o określonym id

  constructor(
    private PagesService: PagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Odczytaj parametr 'id' z adresu URL
    this.route.params.subscribe(params => {
      const projectId = +params['id']; // Przekonwertuj 'id' na liczbę

      // Załaduj informacje tylko dla projektu o danym identyfikatorze 'projectId'
      this.PagesService.LoadProject().subscribe(response => {
        console.log(response);
        this.project = response.find((proj: any) => proj.id === projectId);
      });
    });
  }
}
