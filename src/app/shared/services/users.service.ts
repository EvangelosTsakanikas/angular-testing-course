import { inject, Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

export interface UserInterface {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  utilsService = inject(UtilsService);
  users: UserInterface[] = [];

  constructor() {}

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  removeUser(userId: string): void {
    const updatedUsers = this.users.filter((user) => user.id !== userId);
    this.users = updatedUsers;
  }

  getUsernames(): string[] {
    return this.utilsService.pluck(this.users, 'name');
  }
}
