import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  private _route: string = 'http://api.sebastiancharras.com:8080/api/';

  constructor() {}

  public get route(): string {
    return this._route;
  }
}
