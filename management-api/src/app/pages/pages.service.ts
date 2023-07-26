import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

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
}
