import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _isLogged: boolean = false;
  constructor() {}

  public get isLogged(): boolean {
    return this._isLogged;
  }

  public logIn(user: User): void {
    this._isLogged = true;
  }

  public logOut(): void {
    this._isLogged = false;
  }
}
