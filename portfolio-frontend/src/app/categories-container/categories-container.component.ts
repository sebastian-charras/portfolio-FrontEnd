import { Component, Input } from '@angular/core';
import { Person } from '../entities/person';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.css'],
})
export class CategoriesContainerComponent {
  private _person!: Person;

  constructor(private loginService: LoginService) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get person(): Person {
    return this._person;
  }

  @Input()
  public set person(person: Person) {
    this._person = person;
  }
}
