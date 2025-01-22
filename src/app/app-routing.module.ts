import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component"
import { ProjectsComponent } from "./projects/projects.component"
import { AboutPageComponent } from "./about-page/about-page.component"


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"about", component:AboutPageComponent},
  {path:"**", component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
