import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PagesService {

    constructor(private http: HttpClient) {
    }


    LoadProject(): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/project`).pipe(
            map(response => {
                return response;
            })
        )
    };
    
    loadMeetings(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/meetings');
      };

      AddMeeting(json_data: any): Observable<any> {
        return this.http.post<any>('http://localhost:3000/meetings', json_data).pipe(
          map(response => {
            return response;
          }),
          catchError((error) => {
            console.error('Error adding meeting:', error);
            return throwError('Something went wrong while adding the meeting.');
          })
        );
      }

      loadUsers(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/users');
      };

      DeleteUser(userId: number): Observable<any> {
        const url = `http://localhost:3000/users/${userId}`;
        return this.http.delete<any>(url).pipe(
          map(response => {
            return response;
          }),
          catchError((error) => {
            console.error('Error deleting user:', error);
            return throwError('Something went wrong while deleting the user.');
          })
        );
      }

      LoadTasks(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/tasks');
      };
}
