import { Component } from '@angular/core';
import { Education } from '../entities/education';
import { EducationService } from '../services/education/education.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  private _educations: Education[] = [];
  constructor(
    private educationService: EducationService,
    private loginService: LoginService
  ) {
    this.fetchEducations();
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get educations(): Education[] {
    return this._educations;
  }

  private fetchEducations(): void {
    this.educationService.getAll().subscribe((educations) => {
      this._educations = educations;
    });
  }
}
