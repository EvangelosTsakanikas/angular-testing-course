import { TestBed } from '@angular/core/testing';

import { UserInterface, UsersService } from './users.service';
import { UtilsService } from './utils.service';

describe('UsersService', () => {
  let service: UsersService;
  // WITH SPY
  let utilsService: UtilsService;

  // WITH MOCK
  // const utilsServiceMock = {
  //   pluck: jest.fn(),
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        // WITH SPY
        UtilsService,
        // WITH MOCK
        // { provide: UtilsService, useValue: utilsServiceMock },
      ],
    });
    service = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService);
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

  describe('getUsernames', () => {
    it('should get usernames', () => {
      // WITH SPY
      jest.spyOn(utilsService, 'pluck');
      const user: UserInterface = { id: '3', name: 'Alice' };
      service.addUser(user);
      service.getUsernames();
      expect(utilsService.pluck).toHaveBeenCalledWith(service.users, 'name');

      // WITH MOCK
      // utilsServiceMock.pluck.mockReturnValue(['foo'])
      // expect(service.getUsernames()).toEqual(['foo']);
    });
  });
});
