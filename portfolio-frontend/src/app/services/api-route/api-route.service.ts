import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  private _route: string = 'https://portfolio-argentina-programa.fly.dev//api/';

  constructor() {}

  public get route(): string {
    return this._route;
  }
}
