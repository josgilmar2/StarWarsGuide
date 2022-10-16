import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleInformationComponent } from './components/people/people-information/people-information.component';
import { FilmsListComponent } from './components/films/films-list/films-list.component';
import { FilmsInformationComponent } from './components/films/films-information/films-information.component';
import { SpeciesListComponent } from './components/species/species-list/species-list.component';
import { SpeciesInformationComponent } from './components/species/species-information/species-information.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipsInformationComponent } from './components/starships/starships-information/starships-information.component';
import { VehiclesListComponent } from './components/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesInformationComponent } from './components/vehicles/vehicles-information/vehicles-information.component';
import { PlanetsListComponent } from './components/planets/planets-list/planets-list.component';
import { PlanetsInformationComponent } from './components/planets/planets-information/planets-information.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleInformationComponent,
    FilmsListComponent,
    FilmsInformationComponent,
    SpeciesListComponent,
    SpeciesInformationComponent,
    StarshipsListComponent,
    StarshipsInformationComponent,
    VehiclesListComponent,
    VehiclesInformationComponent,
    PlanetsListComponent,
    PlanetsInformationComponent,
    InitialPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
