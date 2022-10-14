import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Vehicles, VehiclesResponse } from '../interfaces/vehicles.interface';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehiclesListPg(page:number): Observable<VehiclesResponse>{
    return this.http.get<VehiclesResponse>(`${environment.apiBaseUrl}/vehicles?page=${page}`)
  }
  getVehiclesList(): Observable<VehiclesResponse>{
    return this.http.get<VehiclesResponse>(`${environment.apiBaseUrl}/vehicles`)
  }

  getVehicle(vehicle: Vehicles): Observable<VehiclesResponse>{
    let id = vehicle.url.split('/').reverse()[1]
    return this.http.get<VehiclesResponse>(`${environment.apiBaseUrl}/vehicles/${id}`)

  }


}
