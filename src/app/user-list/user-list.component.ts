import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface User {
  id: number;
  username: string;
  email: string;
  registrationTime: string;
  lastLogin: string;
  status: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> | undefined;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  viewUserDetails(userId: number): void {
    this.router.navigate(['/user', userId]);
  }
}
