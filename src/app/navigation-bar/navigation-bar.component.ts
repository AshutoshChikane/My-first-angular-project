import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: false,
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  activeLink: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCurrentUrl();
  }

  getCurrentUrl(): void {
    // Subscribe to the router's events to get the full URL
    this.router.events.subscribe(event => {
        let path = this.location.path();
        let result: string;
        // let result: string =  (path === "home" || path === "/projects" || path === "/about") ? path : "home";
        if (path.includes('projects')){
          result = '/projects'
        }
        else if (path.includes('/about')){
          result = '/about'
        }
        else {
          result = 'home'
        }
        // console.log('Current URL:', result);
        this.setActiveLink(result);
      
    });
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
