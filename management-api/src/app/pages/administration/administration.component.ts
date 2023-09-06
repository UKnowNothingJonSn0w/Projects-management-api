import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  public users: any = [];

  constructor(
    private PagesService: PagesService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.PagesService.loadUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }

  deleteUser(user: any) {
    this.PagesService.DeleteUser(user.id).subscribe(response => {
      console.log('User deleted:', user);
      this.loadData(); // Refresh the user list after deletion
    });
  }
  
}
