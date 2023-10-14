import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagesService } from '../pages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit, OnDestroy {

  public users: any = [];
  private subscriptions: Subscription[] = [];

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadData() {
    this.subscriptions.push(
      this.pagesService.loadUsers().subscribe(response => {
        console.log(response);
        this.users = response;
      })
    );
  }

  deleteUser(user: any) {
    this.subscriptions.push(
      this.pagesService.DeleteUser(user.id).subscribe(response => {
        console.log('User deleted:', user);
        this.loadData();
      })
    );
  }
}
