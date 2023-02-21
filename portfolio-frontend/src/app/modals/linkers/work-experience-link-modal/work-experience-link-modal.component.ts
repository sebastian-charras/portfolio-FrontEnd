import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Institution } from 'src/app/entities/institution';
import { ModalType } from 'src/app/entities/modalType';
import { InstitutionService } from 'src/app/services/institution/institution.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { WorkExperienceService } from 'src/app/services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience-link-modal',
  templateUrl: './work-experience-link-modal.component.html',
  styleUrls: ['./work-experience-link-modal.component.css'],
})
export class WorkExperienceLinkModalComponent {
  private _institutions: Institution[] = [];
  private _form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private workExperienceService: WorkExperienceService,
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
      this.workExperienceService.editableWorkExperience?.id &&
      this.institutionId
    ) {
      this.modalService.type = ModalType.HIDDEN;
      this.workExperienceService
        .addInstitution(
          this.workExperienceService.editableWorkExperience.id,
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
