import {Component} from '@angular/core';
import {Person} from '../entities/person';
import {LoginService} from '../services/login/login.service';
import {PersonService} from '../services/person/person.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private loginService: LoginService,
    private personService: PersonService
  ) {
    this.fetchPerson();
    this.personService.change.subscribe(() => this.fetchPerson());
  }

  private _person?: Person;

  public get person(): Person | undefined {
    return this._person;
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public fetchPerson(): void {
    this.personService.get().subscribe((person) => (this._person = person));
  }
}
