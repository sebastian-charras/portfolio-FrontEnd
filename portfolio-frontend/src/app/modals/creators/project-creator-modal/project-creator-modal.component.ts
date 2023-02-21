import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalType } from 'src/app/entities/modalType';
import { Project } from 'src/app/entities/project';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-creator-modal',
  templateUrl: './project-creator-modal.component.html',
  styleUrls: ['./project-creator-modal.component.css'],
})
export class ProjectCreatorModalComponent {
  private _form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private projectService: ProjectService
  ) {
    this._form = this.formBuilder.group({
      title: ['', [Validators.required]],
      period: ['', [Validators.required]],
      completed: [false, []],
      description: ['', []],
      url: ['', []],
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
    if (this.form.valid) {
      this.modalService.type = ModalType.HIDDEN;
      this.projectService.newProject(this.project).subscribe();
    }
  }

  public get project(): Project {
    let title: string = this.form.controls['title'].value;
    let period: string = this.form.controls['period'].value;
    let completed: boolean = this.form.controls['completed'].value;
    let description: string = this.form.controls['description'].value;
    let url: string = this.form.controls['url'].value;

    return {
      id: null,
      title: title,
      period: period,
      completed: completed,
      description: description,
      url: url,
    };
  }
}
