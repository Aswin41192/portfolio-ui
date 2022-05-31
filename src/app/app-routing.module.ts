import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  pathMatch:"full"
},{
  path:"home",
  component:HomeComponent
},{
  path: "skills",
  component: SkillsComponent
},{
  path: "experience",
  component: ExperienceComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
