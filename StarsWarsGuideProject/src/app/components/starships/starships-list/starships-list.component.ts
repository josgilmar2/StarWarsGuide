import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Starships, StarshipsResponse } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';
import { StarshipsInformationComponent } from '../starships-information/starships-information.component';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starshipsList: Starships[] = [];
  numPages = 0;
  image = true;
  starshipsSelected: StarshipsResponse | undefined;

  constructor(private starshipsService: StarshipsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStarshipsPage(1)
  }

  getStarshipsPage(page: number) {
    this.starshipsService.getStarships(page).subscribe(response => {
      this.starshipsList = response.results;
      this.numPages = Math.ceil(response.count / 10);
    });
  }

  showImages(s: Starships) {
    this.image = true;
    let starshipsId = s.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/starships/${starshipsId}.jpg`;
  }

  showDefaultImage() {
    this.image = false;
    return `https://starwars-visualguide.com/assets/img/placeholder.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }

  getStarshipsInfo(s: Starships) {
    this.starshipsService.getStarshipsId(s).subscribe(response => {
      this.starshipsSelected = response;
    this.dialog.open(StarshipsInformationComponent, {
      width: '80%',
      data: {
        starshipsInfo: this.starshipsSelected,
        background: 'https://srunners.com/wp-content/uploads/2020/04/fondos-de-star-wars-min-1024x576.jpg',
        color: '#FFF'
        }
      })
    });
  }

}
