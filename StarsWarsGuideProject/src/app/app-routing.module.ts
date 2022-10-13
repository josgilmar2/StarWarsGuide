import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { SpeciesInformationComponent } from './components/species/species-information/species-information.component';
import { SpeciesListComponent } from './components/species/species-list/species-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  {path: 'initial-page', component: InitialPageComponent},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'species-list', component: SpeciesListComponent},
  { path: 'species-info/id', component: SpeciesInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
