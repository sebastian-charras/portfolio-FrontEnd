import { Component } from '@angular/core';
import { Education } from 'src/app/entities/education';
import { ModalType } from 'src/app/entities/modalType';
import { EducationService } from 'src/app/services/education/education.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  private _educations: Education[] = [];
  constructor(
    private educationService: EducationService,
    private loginService: LoginService,
    private modalService: ModalService
  ) {
    this.fetchEducations();
    this.educationService.change.subscribe(() => this.fetchEducations());
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

  public showCreatorModal(): void {
    this.modalService.type = ModalType.CREATE_EDUCATION;
  }
}
