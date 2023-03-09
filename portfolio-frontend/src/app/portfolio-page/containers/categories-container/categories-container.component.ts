import {Component, Input} from '@angular/core';
import {Person} from 'src/app/entities/person';
import {LoginService} from 'src/app/services/login/login.service';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.css'],
})
export class CategoriesContainerComponent {
  constructor(private loginService: LoginService) {
  }

  private _person!: Person;

  public get person(): Person {
    return this._person;
  }

  @Input()
  public set person(person: Person) {
    this._person = person;
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }
}
