import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Education } from 'src/app/entities/education';
import { ModalType } from 'src/app/entities/modalType';
import { EducationService } from 'src/app/services/education/education.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-education-editor-modal',
  templateUrl: './education-editor-modal.component.html',
  styleUrls: ['./education-editor-modal.component.css'],
})
export class EducationEditorModalComponent {
  private _form: FormGroup;
  private originalEducation?: Education =
    this.educationService.editableEducation;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private educationService: EducationService
  ) {
    this._form = this.formBuilder.group({
      title: [
        this.educationService.editableEducation?.title,
        [Validators.required],
      ],
      period: [
        this.educationService.editableEducation?.period,
        [Validators.required],
      ],
      completed: [this.educationService.editableEducation?.completed, []],
      description: [this.educationService.editableEducation?.description, []],
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
    if (this.originalEducation !== undefined && this.form.valid) {
      this.educationService.editableEducation = undefined;
      this.modalService.type = ModalType.HIDDEN;
      this.educationService
        .replaceEducation(Number(this.originalEducation.id), this.education)
        .subscribe();
    }
  }

  public get education(): Education {
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
