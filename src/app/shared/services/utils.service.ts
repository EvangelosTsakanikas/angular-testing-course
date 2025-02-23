import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  range = (start: number, end: number): number[] => {
    return [...Array(end - start).keys()].map((num) => num + start);
  };

  pluck = (elements: any[], field: string) => {
    return elements.map((element) => element[field]);
  };
}
