import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";

const routes: Routes = [
  {
    path: '',
    component:MainPageComponent
  }, {
    path: 'project',
    component:ProjectsComponent
  }, {
    path: 'project-details',
    component:ProjectDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
