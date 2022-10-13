import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planets, PlanetsResponse } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanetsListPg(page:number): Observable<PlanetsResponse>{
    return this.http.get<PlanetsResponse>(`${environment.apiBaseUrl}/planets?page=${page}`)
  }
  getPlanetsList(): Observable<PlanetsResponse>{
    return this.http.get<PlanetsResponse>(`${environment.apiBaseUrl}/planets`)
  }

  getPlanet(planet: Planets): Observable<PlanetsResponse>{
    let id = planet.url.split('/').reverse()[1]
    return this.http.get<PlanetsResponse>(`${environment.apiBaseUrl}/planets/${id}`)

  }
}
