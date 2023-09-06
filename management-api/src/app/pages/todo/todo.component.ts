import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

interface Task {
  id: string;
  task_name: string;
  date: string;
  type: string;
  completed: boolean;
  user: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = [];

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.pagesService.LoadTasks().subscribe((response: Task[]) => {
      this.tasks = response;
    });
  }
  
}
