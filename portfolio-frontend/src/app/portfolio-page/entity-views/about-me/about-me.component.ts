import { Component, Input } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { ModalService } from 'src/app/services/modal/modal.service';
import { PersonService } from 'src/app/services/person/person.service';
import { Person } from '../../../entities/person';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  private _person!: Person;

  constructor(private loginService: LoginService, private personService: PersonService, private modalService: ModalService) {}

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

  public edit(): void {
    this.personService.editablePerson = this._person;
    this.modalService.type = ModalType.EDIT_PERSON;
  }
}
