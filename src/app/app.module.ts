import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoListProjectModule } from './todo-list-project/todo-list-project.module'
import { CommonModule } from '@angular/common';
import { UserManagementModule } from './user-management/user-management.module'
import { provideHttpClient } from '@angular/common/http';
import { UserServiceService } from './my-service/user-data-service/user-service.service';
import { CsvHandlerComponent } from './csv-handler/csv-handler.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationBarComponent,
    ProjectsComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListProjectModule,
    CommonModule,
    UserManagementModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
