// src/app/app.component.ts
import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component'; // Adjust path as necessary
import { RouterOutlet } from '@angular/router'; // Ensure RouterOutlet is imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, RouterOutlet], // Import UserListComponent and RouterOutlet
  template: `<router-outlet></router-outlet>`, // Use router outlet for routing
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-management-app';
}
