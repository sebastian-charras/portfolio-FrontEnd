import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Education} from 'src/app/entities/education';
import {ModalType} from 'src/app/entities/modalType';
import {EducationService} from 'src/app/services/education/education.service';
import {ModalService} from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-education-creator-modal',
  templateUrl: './education-creator-modal.component.html',
  styleUrls: ['./education-creator-modal.component.css'],
})
export class EducationCreatorModalComponent {
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private educationService: EducationService
  ) {
    this._form = this.formBuilder.group({
      title: ['', [Validators.required]],
      period: ['', [Validators.required]],
      completed: [false, [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  private _form: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }

  public set form(form: FormGroup) {
    this._form = form;
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

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }

  public onSubmit(event: Event): void {
    if (this.form.valid) {
      this.modalService.type = ModalType.HIDDEN;
      this.educationService.newEducation(this.education).subscribe();
    }
  }
}
