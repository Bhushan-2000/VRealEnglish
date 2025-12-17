import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-profile-page', 
  templateUrl: './profile-page.component.html', 
  styleUrls: ['./profile-page.component.css'],
  standalone: false
})
export class ProfilePageComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}