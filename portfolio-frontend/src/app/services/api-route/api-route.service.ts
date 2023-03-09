import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  constructor() {
  }

  private _route: string = 'https://portfolio-argentina-programa.fly.dev/api/';

  public get route(): string {
    return this._route;
  }
}
