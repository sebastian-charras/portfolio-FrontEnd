import { Component, Input } from '@angular/core';
import { Education } from 'src/app/entities/education';
import { ModalType } from 'src/app/entities/modalType';
import { EducationService } from 'src/app/services/education/education.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  private _education!: Education;

  constructor(
    private loginService: LoginService,
    private educationService: EducationService,
    private modalService: ModalService
  ) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get education(): Education {
    return this._education;
  }

  @Input()
  public set education(education: Education) {
    this._education = education;
  }

  public delete(): void {
    if (this._education.institution) {
      this.modalService.type = ModalType.ERROR_DELETE;
    } else {
      this.educationService
        .deleteEducation(Number(this._education.id))
        .subscribe();
    }
  }

  public edit(): void {
    this.educationService.editableEducation = this._education;
    this.modalService.type = ModalType.EDIT_EDUCATION;
  }

  public link(): void {
    this.educationService.editableEducation = this._education;
    this.modalService.type = ModalType.LINK_EDUCATION;
  }

  public linkOff(): void {
    if (
      this._education.id !== null &&
      this._education.institution?.id !== null
    ) {
      this.educationService
        .removeInstitution(this._education.id)
        .subscribe();
    }
  }
}
