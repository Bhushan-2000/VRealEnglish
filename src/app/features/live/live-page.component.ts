import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-live-page', 
  templateUrl: './live-page.component.html', 
  styleUrls: ['./live-page.component.css'],
  standalone: false
})
export class LivePageComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}