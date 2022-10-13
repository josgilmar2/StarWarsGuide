import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  {path: 'initial-page', component:InitialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
