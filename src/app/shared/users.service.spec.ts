import { TestBed } from '@angular/core/testing';

import { UserInterface, UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInterface = { id: '3', name: 'Alice' };
      service.addUser(user);
      expect(service.users).toEqual([user]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      const user: UserInterface = { id: '3', name: 'Alice' };
      service.addUser(user);
      service.removeUser(user.id);
      expect(service.users).toEqual([]);
    });
  });
});
