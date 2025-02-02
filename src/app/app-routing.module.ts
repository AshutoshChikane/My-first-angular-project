import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component"
import { ProjectsComponent } from "./projects/projects.component"
import { AboutPageComponent } from "./about-page/about-page.component"
import { TodoListComponent} from './todo-list-project/todo-list/todo-list.component'
import { CreateUserComponent } from './user-management/create-user/create-user.component'
import { ViewUserComponent } from './user-management/view-user/view-user.component'
import { FailPassChartComponent } from './chart-project/fail-pass-chart/fail-pass-chart.component'
import { DashboardMainPageComponent } from './dashboard/dashboard-main-page/dashboard-main-page.component'

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"about", component:AboutPageComponent},
  {path:"projects/todo", component:TodoListComponent},
  {path:"projects/user-list", component:ViewUserComponent},
  {path:"projects/user-create", component:CreateUserComponent},
  {path:"projects/chart", component:FailPassChartComponent},
  {path:"projects/dashboard", component:DashboardMainPageComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
