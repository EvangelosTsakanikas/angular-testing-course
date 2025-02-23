import { inject, Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { BehaviorSubject } from 'rxjs';

export interface UserInterface {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // utilsService = inject(UtilsService);
  users: UserInterface[] = [];
  users$ = new BehaviorSubject<UserInterface[]>([]);

  constructor() {}

  addUser(user: UserInterface): void {
    // this.users = [...this.users, user];
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    // const updatedUsers = this.users.filter((user) => user.id !== userId);
    // this.users = updatedUsers;
    const updatedUsers = this.users$
      .getValue()
      .filter((user) => user.id !== userId);
    this.users$.next(updatedUsers);
  }

  // getUsernames(): string[] {
  //   return this.utilsService.pluck(this.users, 'name');
  // }
}
