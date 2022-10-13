import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './components/films/films-list/films-list.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  {path: 'initial-page', component: InitialPageComponent},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'films-list', component: FilmsListComponent},
  {path: 'starships-list', component: StarshipsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
