import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Species, SpeciesResponse } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';
import { SpeciesInformationComponent } from '../species-information/species-information.component';

@Component({
  selector: 'species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  speciesList: Species[]=[]
  numPages=0;
  speciesSelected: SpeciesResponse | undefined;

  constructor(
    private speciesService: SpeciesService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getSpeciesPage(1)
  }

  getSpeciesPage(page:number){
    this.speciesService.getSpeciesListPg(page).subscribe(resp =>{
      this.speciesList = resp.results;
      this.numPages =Math.ceil(resp.count/10)
    })
  }

  counter(){
    return new Array(this.numPages)
  }
  modificarUrlImgSpc(specie: Species){
    
    
    let array=specie.url.split('/')
      array=array.reverse()
      let id=array[1]
  
    return 'https://starwars-visualguide.com/assets/img/species/'+id+'.jpg'
  }

  getSpeciesInfo(species: Species) {
    this.speciesService.getSpecie(species).subscribe(response => {
      this.speciesSelected = response;
      
      this.dialog.open(SpeciesInformationComponent, {
       width:'75%',
        data: {
          speciesInfo: this.speciesSelected,
          url: 'https://i.pinimg.com/736x/de/fa/dc/defadc1400875bad29f74179352c606c--star-wars-backgrounds-desktop-backgrounds.jpg',
          color: '#FFFFFF',
          urlImg: 'https://starwars-visualguide.com/assets/img/species/'
        },
      });
    });
  }
}
