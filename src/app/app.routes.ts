// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'; // Adjust path as necessary
import { UserDetailsComponent } from './user-detail/user-detail.component'; // Adjust path as necessary

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent } // Assuming this is your route for user details
];
