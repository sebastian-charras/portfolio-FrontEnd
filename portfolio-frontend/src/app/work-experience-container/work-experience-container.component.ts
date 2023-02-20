import { Component } from '@angular/core';
import { WorkExperience } from '../entities/workExperience';
import { LoginService } from '../services/login/login.service';
import { WorkExperienceService } from '../services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience-container',
  templateUrl: './work-experience-container.component.html',
  styleUrls: ['./work-experience-container.component.css'],
})
export class WorkExperienceContainerComponent {
  private _workExperiences: WorkExperience[] = [];

  constructor(
    private workExperienceService: WorkExperienceService,
    private loginService: LoginService
  ) {
    this.fetchWorkExperience();
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get workExperiences(): WorkExperience[] {
    return this._workExperiences;
  }

  private fetchWorkExperience(): void {
    this.workExperienceService
      .getAll()
      .subscribe(
        (workExperiences) => (this._workExperiences = workExperiences)
      );
  }
}
