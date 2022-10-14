import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/starships.interface';

@Component({
  selector: 'app-starships-information',
  templateUrl: './starships-information.component.html',
  styleUrls: ['./starships-information.component.css']
})
export class StarshipsInformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
