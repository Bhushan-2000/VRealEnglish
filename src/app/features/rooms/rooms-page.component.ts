import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-rooms-page', 
  templateUrl: './rooms-page.component.html', 
  styleUrls: ['./rooms-page.component.css'],
  standalone: false
})
export class RoomsPageComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}