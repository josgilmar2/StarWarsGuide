import { Component, OnInit } from '@angular/core';
import { Starships } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starshipsList: Starships[] = [];
  numPages = 0;
  image = true;

  constructor(private starshipsService: StarshipsService) { }

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

}
