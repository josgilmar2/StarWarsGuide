import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { People, PeopleResponse } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';
import { PeopleInformationComponent } from '../people-information/people-information.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = [];
  numPages = 0;
  peopleSelected: PeopleResponse | undefined;

  constructor(private peopleService: PeopleService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPeoplePage(1);
  }

  getPeoplePage(page: number) {
    this.peopleService.getPeople(page).subscribe(response => {
      this.peopleList = response.results;
      this.numPages = Math.ceil(response.count / 10);
    });
  }

  showImages(p: People) {
    let peopleId = p.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${peopleId}.jpg`
  }

  counter() {
    return new Array(this.numPages);
  }

  getPeopleInfo(p: People) {
    this.peopleService.getPeopleId(p).subscribe(response => {
      this.peopleSelected = response;
      this.dialog.open(PeopleInformationComponent, {
        width: '80%',
        data: {
          peopleInfo: this.peopleSelected,
          background: 'https://srunners.com/wp-content/uploads/2020/04/fondos-de-star-wars-min-1024x576.jpg',
          color: '#FFF'
        }
      })
    });
  }
}
