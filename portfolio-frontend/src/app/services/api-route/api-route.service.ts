import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  private _route: string = 'http://192.168.100.42:8080/api/';

  constructor() {}

  public get route(): string {
    return this._route;
  }
}
