import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PeopleResponse } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/people?page=${page}`)
  }

  getPeopleId(p: People): Observable<PeopleResponse> {
    let id = p.url.split('/')[5];
    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/people/${id}`)
  }
}
