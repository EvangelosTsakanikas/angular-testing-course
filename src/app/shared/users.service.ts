import { Injectable } from '@angular/core';

export interface UserInterface {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: UserInterface[] = [];

  constructor() {}

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  removeUser(userId: string): void {
    const updatedUsers = this.users.filter((user) => user.id !== userId);
    this.users = updatedUsers;
  }
}
