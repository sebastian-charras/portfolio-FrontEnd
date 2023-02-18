import { Component, Input } from '@angular/core';
import { Education } from '../entities/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  private _education!: Education;

  public get education(): Education {
    return this._education;
  }

  @Input()
  public set education(education: Education) {
    this._education = education;
  }
}
