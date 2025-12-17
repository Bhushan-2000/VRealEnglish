import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-ai-coach-page', 
  templateUrl: './ai-coach-page.component.html', 
  styleUrls: ['./ai-coach-page.component.css'],
  standalone: false
})
export class AiCoachPageComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/learning']);
  }
}