import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FilmsListComponent } from './components/films/films-list/films-list.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PlanetsInformationComponent } from './components/planets/planets-information/planets-information.component';
import { PlanetsListComponent } from './components/planets/planets-list/planets-list.component';
import { SpeciesInformationComponent } from './components/species/species-information/species-information.component';
import { SpeciesListComponent } from './components/species/species-list/species-list.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { VehiclesInformationComponent } from './components/vehicles/vehicles-information/vehicles-information.component';
import { VehiclesListComponent } from './components/vehicles/vehicles-list/vehicles-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  {path: 'initial-page', component: InitialPageComponent},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'species-list', component: SpeciesListComponent},
  {path: 'species-info/id', component: SpeciesInformationComponent},
  {path: 'vehicles-list', component: VehiclesListComponent},
  {path: 'vehicles-info/id', component: VehiclesInformationComponent},
  {path: 'planets-list', component: PlanetsListComponent},
  {path: 'planets-info/id', component: PlanetsInformationComponent},
  {path: 'films-list', component: FilmsListComponent},
  {path: 'starships-list', component: StarshipsListComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
