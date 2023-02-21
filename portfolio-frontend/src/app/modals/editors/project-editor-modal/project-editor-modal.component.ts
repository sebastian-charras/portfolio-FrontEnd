import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalType } from 'src/app/entities/modalType';
import { Project } from 'src/app/entities/project';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-editor-modal',
  templateUrl: './project-editor-modal.component.html',
  styleUrls: ['./project-editor-modal.component.css'],
})
export class ProjectEditorModalComponent {
  private _form: FormGroup;
  private originalProject?: Project = this.projectService.editableProject;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private projectService: ProjectService
  ) {
    this._form = this.formBuilder.group({
      title: [
        this.projectService.editableProject?.title,
        [Validators.required],
      ],
      period: [
        this.projectService.editableProject?.period,
        [Validators.required],
      ],
      completed: [this.projectService.editableProject?.completed, []],
      description: [this.projectService.editableProject?.description, []],
      url: [this.projectService.editableProject?.url, []],
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
    if (this.originalProject !== undefined && this.form.valid) {
      this.projectService.editableProject = undefined;
      this.modalService.type = ModalType.HIDDEN;
      this.projectService
        .replaceProject(Number(this.originalProject.id), this.project)
        .subscribe();
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
