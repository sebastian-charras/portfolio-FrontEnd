import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  private _route: string = 'https://api.sebastiancharras.com:8081/api/';

  constructor() {}

  public get route(): string {
    return this._route;
  }
}
