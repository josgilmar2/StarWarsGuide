import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Species, SpeciesResponse } from '../interfaces/species.interface';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpeciesListPg(page:number): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${environment.apiBaseUrl}/species?page=${page}`)
  }
  getSpeciesList(): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${environment.apiBaseUrl}/species`)
  }

  getSpecie(specie: Species): Observable<SpeciesResponse>{
    let id = specie.url.split('/').reverse()[1]
    return this.http.get<SpeciesResponse>(`${environment.apiBaseUrl}/species/${id}`)

  }


}
