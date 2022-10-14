import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Starships, StarshipsResponse } from '../interfaces/starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(page: number): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(`${environment.apiBaseUrl}/starships?page=${page}`);
  }

  getStarshipsId(s: Starships): Observable<StarshipsResponse> {
    let id = s.url.split('/')[5];
    return  this.http.get<StarshipsResponse>(`${environment.apiBaseUrl}/starships/${id}`);
  }
}
