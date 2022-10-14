import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Films, FilmsResponse } from 'src/app/interfaces/films.interface';
import { FilmsService } from 'src/app/services/films.service';
import { FilmsInformationComponent } from '../films-information/films-information.component';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  filmsList: Films[] = [];
  numPages = 0;
  filmsSelected: FilmsResponse | undefined;

  constructor(private filmsService: FilmsService, public dialog: MatDialog) { }

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

  getFilmsInfo(f: Films) {
    this.filmsService.getFilmsId(f).subscribe(response => {
      this.filmsSelected = response;
      this.dialog.open(FilmsInformationComponent, {
        width: '80%',
        data: {
          filmsInfo: this.filmsSelected,
          background: 'https://srunners.com/wp-content/uploads/2020/04/fondos-de-star-wars-min-1024x576.jpg',
          color: '#FFF'
        }
      })
    });
  }

}
