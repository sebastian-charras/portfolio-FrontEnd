import { Component } from '@angular/core';
import { Person } from 'src/app/entities/person';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css'],
})
export class PageContainerComponent {
  private _person?: Person;

  constructor(private personService: PersonService) {
    this.fetchPerson();
    this.personService.change.subscribe(() => this.fetchPerson());
  }

  public get person(): Person | undefined {
    return this._person;
  }

  private fetchPerson(): void {
    this.personService.get().subscribe((person) => (this._person = person));
  }
}
