import { Component, Input } from '@angular/core';
import { Education } from '../entities/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @Input()
  education?: Education;
}
