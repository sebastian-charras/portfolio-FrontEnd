import { Component, Input } from '@angular/core';
import { WorkExperience } from '../entities/workExperience';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  private _workExperience!: WorkExperience;

  constructor(private loginService: LoginService) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get workExperience(): WorkExperience {
    return this._workExperience;
  }

  @Input()
  public set workExperience(workExperience: WorkExperience) {
    this._workExperience = workExperience;
  }
}
