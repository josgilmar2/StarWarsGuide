import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vehicles, VehiclesResponse } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { VehiclesInformationComponent } from '../vehicles-information/vehicles-information.component';

@Component({
  selector: 'vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  vehiclesList: Vehicles[]=[]
  numPages=0;
  vehiclesSelected: VehiclesResponse | undefined;

  constructor(
    private vehiclesService: VehiclesService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getVehiclesPage(1)
  }

  getVehiclesPage(page:number){
    this.vehiclesService.getVehiclesListPg(page).subscribe(resp =>{
      this.vehiclesList = resp.results;
      this.numPages =Math.ceil(resp.count/10)
    })
  }

  counter(){
    return new Array(this.numPages)
  }
  modificarUrlImgSpc(specie: Vehicles){
    
    
    let array=specie.url.split('/')
      array=array.reverse()
      let id=array[1]
  
    return 'https://starwars-visualguide.com/assets/img/vehicles/'+id+'.jpg'
  }

  getVehiclesInfo(vehicles: Vehicles) {
    this.vehiclesService.getVehicle(vehicles).subscribe(response => {
      this.vehiclesSelected = response;
      
      this.dialog.open(VehiclesInformationComponent, {
        width:'75%',
        data: {
          vehiclesInfo: this.vehiclesSelected,
          url: 'https://i.pinimg.com/736x/de/fa/dc/defadc1400875bad29f74179352c606c--star-wars-backgrounds-desktop-backgrounds.jpg',
          color: '#FFFFFF',
          urlImg: 'https://starwars-visualguide.com/assets/img/vehicles/'
        },
      });
    });
  }
}
