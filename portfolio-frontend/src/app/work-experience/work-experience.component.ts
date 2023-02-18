import { Component, Input } from '@angular/core';
import { WorkExperience } from '../entities/workExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  private _workExperience!: WorkExperience;

  public get workExperience(): WorkExperience {
    return this._workExperience;
  }

  @Input()
  public set workExperience(workExperience: WorkExperience) {
    this._workExperience = workExperience;
  }
}
