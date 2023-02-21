import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalType } from 'src/app/entities/modalType';
import { WorkExperience } from 'src/app/entities/workExperience';
import { ModalService } from 'src/app/services/modal/modal.service';
import { WorkExperienceService } from 'src/app/services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience-editor-modal',
  templateUrl: './work-experience-editor-modal.component.html',
  styleUrls: ['./work-experience-editor-modal.component.css'],
})
export class WorkExperienceEditorModalComponent {
  private _form: FormGroup;
  private originalWorkExperience?: WorkExperience =
    this.workExperienceService.editableWorkExperience;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private workExperienceService: WorkExperienceService
  ) {
    this._form = this.formBuilder.group({
      title: [
        this.workExperienceService.editableWorkExperience?.title,
        [Validators.required],
      ],
      period: [
        this.workExperienceService.editableWorkExperience?.period,
        [Validators.required],
      ],
      completed: [
        this.workExperienceService.editableWorkExperience?.completed,
        [],
      ],
      description: [
        this.workExperienceService.editableWorkExperience?.description,
        [],
      ],
    });
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
    if (this.originalWorkExperience !== undefined && this.form.valid) {
      this.workExperienceService.editableWorkExperience = undefined;
      this.modalService.type = ModalType.HIDDEN;
      this.workExperienceService
        .replaceWorkExperience(
          Number(this.originalWorkExperience.id),
          this.workExperience
        )
        .subscribe();
    }
  }

  public get workExperience(): WorkExperience {
    let title: string = this.form.controls['title'].value;
    let period: string = this.form.controls['period'].value;
    let completed: boolean = this.form.controls['completed'].value;
    let description: string = this.form.controls['description'].value;

    return {
      id: null,
      institution: null,
      title: title,
      period: period,
      completed: completed,
      description: description,
    };
  }
}
