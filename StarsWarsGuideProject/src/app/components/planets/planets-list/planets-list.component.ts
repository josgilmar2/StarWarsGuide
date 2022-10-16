import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Planets, PlanetsResponse } from 'src/app/interfaces/planets.interface';
import { PlanetsService } from 'src/app/services/planets.service';
import { PlanetsInformationComponent } from '../planets-information/planets-information.component';

@Component({
  selector: 'planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  planetsList: Planets[]=[]
  numPages=0;
  planetsSelected: PlanetsResponse | undefined;

  constructor(
    private planetsService: PlanetsService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getPlanetsPage(1)
  }

  getPlanetsPage(page:number){
    this.planetsService.getPlanetsListPg(page).subscribe(resp =>{
      this.planetsList = resp.results;
      this.numPages =Math.ceil(resp.count/10)
    })
  }

  counter(){
    return new Array(this.numPages)
  }
  modificarUrlImgSpc(planet: Planets){
    
    
    let array=planet.url.split('/')
      array=array.reverse()
      let id=array[1]
  
    return 'https://starwars-visualguide.com/assets/img/planets/'+id+'.jpg'
  }

  getPlanetsInfo(planets: Planets) {
    this.planetsService.getPlanet(planets).subscribe(response => {
      this.planetsSelected = response;
      
      this.dialog.open(PlanetsInformationComponent, {
        width: '75%',
        data: {
          planetsInfo: this.planetsSelected,
          url: 'https://i.pinimg.com/736x/de/fa/dc/defadc1400875bad29f74179352c606c--star-wars-backgrounds-desktop-backgrounds.jpg',
          color: '#FFFFFF',
          urlImg: 'https://starwars-visualguide.com/assets/img/planets/'
        },
      });
    });
  }
}
