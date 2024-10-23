import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface User {
  id: number;
  username: string;
  email: string;
  registrationTime: string;
  lastLogin: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, username: 'admin', email: 'admin@sometemail.com', registrationTime: '27-Nov-20 08:30', lastLogin: '27-Nov-20 09:00', status: 'Confirmed' },
    { id: 2, username: 'officer', email: 'officer1@sometemail.com', registrationTime: '27-Nov-20 08:30', lastLogin: '27-Nov-20 09:00', status: 'Confirmed' },
    { id: 3, username: 'manager', email: 'manager@sometemail.com', registrationTime: '27-Nov-20 08:30', lastLogin: '27-Nov-20 09:00', status: 'Blocked' }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }
}
