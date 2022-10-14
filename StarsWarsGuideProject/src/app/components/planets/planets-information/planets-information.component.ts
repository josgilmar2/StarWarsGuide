import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/planets.interface';

@Component({
  selector: 'app-planets-information',
  templateUrl: './planets-information.component.html',
  styleUrls: ['./planets-information.component.css']
})
export class PlanetsInformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
