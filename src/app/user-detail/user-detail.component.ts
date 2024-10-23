// src/app/user-detail/user-detail.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for directives like *ngIf
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true, // Mark as a standalone component
  imports: [CommonModule], // Import CommonModule for template directives
  template: `
    <h2>User Details</h2>
    <div *ngIf="user">
      <p><strong>Name:</strong> {{ user.username }}</p>
      <p><strong>Registration Time:</strong> {{ user.registrationTime }}</p>
      <p><strong>Last Login:</strong> {{ user.lastLogin }}</p>
      <p><strong>Status:</strong> <span [ngClass]="{'active': user.status === 'Confirmed', 'blocked': user.status === 'Blocked'}">{{ user.status }}</span></p>
    </div>
    <button (click)="goBack()">Go Back</button>
  `,
})
export class UserDetailsComponent {
  user: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.user;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
