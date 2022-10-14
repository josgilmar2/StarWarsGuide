import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Films, FilmsResponse } from '../interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<FilmsResponse>{
    return this.http.get<FilmsResponse>(`${environment.apiBaseUrl}/films?page=${page}`)
  }

  getFilmsId(f: Films): Observable<FilmsResponse> {
    let id = f.url.split('/')[5];
    return this.http.get<FilmsResponse>(`${environment.apiBaseUrl}/films/${id}`);
  }
}
