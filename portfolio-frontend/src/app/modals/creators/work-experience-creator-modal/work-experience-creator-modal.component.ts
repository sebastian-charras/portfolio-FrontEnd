import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalType} from 'src/app/entities/modalType';
import {WorkExperience} from 'src/app/entities/workExperience';
import {ModalService} from 'src/app/services/modal/modal.service';
import {WorkExperienceService} from 'src/app/services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience-creator-modal',
  templateUrl: './work-experience-creator-modal.component.html',
  styleUrls: ['./work-experience-creator-modal.component.css'],
})
export class WorkExperienceCreatorModalComponent {
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private workExperienceService: WorkExperienceService
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

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }

  public onSubmit(event: Event): void {
    if (this.form.valid) {
      this.modalService.type = ModalType.HIDDEN;
      this.workExperienceService
        .newWorkExperience(this.workExperience)
        .subscribe();
    }
  }
}
