import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/films.interface';

@Component({
  selector: 'app-films-information',
  templateUrl: './films-information.component.html',
  styleUrls: ['./films-information.component.css']
})
export class FilmsInformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
