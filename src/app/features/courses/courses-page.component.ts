import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-courses-page', 
  templateUrl: './courses-page.component.html', 
  styleUrls: ['./courses-page.component.css'],
  standalone: false
})
export class CoursesPageComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}