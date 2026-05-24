import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './Features/projects/projects.component';
import { SkillsComponent } from './Features/skills/skills.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path :'',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
