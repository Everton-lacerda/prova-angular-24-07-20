import { EditComponent } from './pages/person/edit/edit.component';
import { AddComponent } from './pages/person/add/add.component';
import { ListComponent } from './pages/person/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: ListComponent},
  {path: 'person/add', component: AddComponent},
  {path: 'person/edit/:email', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
