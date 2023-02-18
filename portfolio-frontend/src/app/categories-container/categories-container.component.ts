import { Component, Input } from '@angular/core';
import { Person } from '../entities/person';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.css'],
})
export class CategoriesContainerComponent {
  private _person!: Person;

  public get person(): Person {
    return this._person;
  }

  @Input()
  public set person(person: Person) {
    this._person = person;
  }
}
