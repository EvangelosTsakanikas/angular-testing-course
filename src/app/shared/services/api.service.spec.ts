import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ApiService, TagInterface } from './api.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), ApiService],
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getTags', () => {
    it('should return a list of tages', () => {
      let tags: TagInterface[] | undefined;
      service.getTags().subscribe((response) => {
        tags = response;
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush([{ id: '1', name: 'foo' }]);
      expect(tags).toEqual([{ id: '1', name: 'foo' }]);
    });
  });

  describe('createTag', () => {
    it('should create a tag', () => {
      let tag: TagInterface | undefined;
      service.createTag('foo').subscribe((response) => {
        tag = response;
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush({ id: '1', name: 'foo' });
      expect(tag).toEqual({ id: '1', name: 'foo' });
    });

    // not so common as a test
    it('passes the correct body', () => {
      let tag: TagInterface | undefined;
      service.createTag('foo').subscribe((response) => {
        tag = response;
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush({ id: '1', name: 'foo' });

      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual({ name: 'foo' });
    });

    it('throws an error if the request fails', () => {
      let actualError: HttpErrorResponse | undefined;
      service.createTag('foo').subscribe({
        next: () => {
          fail('Success should not be called');
        },
        error: (error) => {
          actualError = error;
        },
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush('Server error', {
        status: 500,
        statusText: 'Internal Server Error',
      });
      expect(actualError?.status).toEqual(500);
      expect(actualError?.statusText).toEqual('Internal Server Error');
    });
  });
});
