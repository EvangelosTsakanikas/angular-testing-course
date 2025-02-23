import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TagInterface {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient = inject(HttpClient);
  apiUrl = 'http://localhost:3004';

  getTags(): Observable<TagInterface[]> {
    return this.httpClient.get<TagInterface[]>(`${this.apiUrl}/tags`);
  }

  createTag(name: string): Observable<TagInterface> {
    return this.httpClient.post<TagInterface>(`${this.apiUrl}/tags`, { name });
  }
}
