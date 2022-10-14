import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/vehicles.interface';

@Component({
  selector: 'app-vehicles-information',
  templateUrl: './vehicles-information.component.html',
  styleUrls: ['./vehicles-information.component.css']
})
export class VehiclesInformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
