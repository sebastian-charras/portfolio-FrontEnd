import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Education } from 'src/app/entities/education';
import { Institution } from 'src/app/entities/institution';
import { ModalType } from 'src/app/entities/modalType';
import { EducationService } from 'src/app/services/education/education.service';
import { InstitutionService } from 'src/app/services/institution/institution.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-education-link-modal',
  templateUrl: './education-link-modal.component.html',
  styleUrls: ['./education-link-modal.component.css'],
})
export class EducationLinkModalComponent {
  private _institutions: Institution[] = [];
  private _form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private educationService: EducationService,
    private institutionService: InstitutionService
  ) {
    this._form = this.formBuilder.group({
      institutionId: [0, [Validators.required, Validators.min(1)]],
    });
    this.fetchInstitutions();
  }

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }

  public get form(): FormGroup {
    return this._form;
  }

  public set form(form: FormGroup) {
    this._form = form;
  }

  public onSubmit(event: Event): void {
    if (
      this.form.valid &&
      this.educationService.editableEducation?.id &&
      this.institutionId
    ) {
      this.modalService.type = ModalType.HIDDEN;
      this.educationService
        .addInstitution(
          this.educationService.editableEducation.id,
          this.institutionId
        )
        .subscribe();
    }
  }

  public get institutionId(): number {
    let id: number = Number(this.form.controls['institutionId'].value);
    return id;
  }

  public fetchInstitutions(): void {
    this.institutionService
      .getAll()
      .subscribe((institutions) => (this._institutions = institutions));
  }

  public get institutions(): Institution[] {
    return this._institutions;
  }
}
