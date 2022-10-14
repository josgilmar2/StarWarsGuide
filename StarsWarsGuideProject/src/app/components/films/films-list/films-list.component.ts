import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/interfaces/films.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  filmsList: Films[] = [];
  numPages = 0;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilmsPage(1);
  }

  getFilmsPage(page: number) {
    this.filmsService.getFilms(page).subscribe(response => {
      this.filmsList = response.results;
      this.numPages = Math.ceil(response.count / 10)
    });

  }

  showImages(f: Films) {
    let filmsId = f.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/films/${filmsId}.jpg`
  }

  counter() {
    return new Array(this.numPages);
  }

}
