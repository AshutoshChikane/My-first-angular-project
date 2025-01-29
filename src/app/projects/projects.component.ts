import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private router: Router){}

  showUserManagement = false;

  directToPage(path_variable: string){
    this.router.navigate([path_variable])
  }

  showUserManagementPage() {
    console.log('helo')
    this.showUserManagement = true;
  }

}
