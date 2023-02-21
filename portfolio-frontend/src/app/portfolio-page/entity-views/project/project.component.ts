import { Component, Input } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { Project } from 'src/app/entities/project';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  private _project!: Project;

  constructor(
    private loginService: LoginService,
    private projectService: ProjectService,
    private modalService: ModalService
  ) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get project(): Project {
    return this._project;
  }

  @Input()
  public set project(project: Project) {
    this._project = project;
  }

  public delete(): void {
    this.projectService.deleteProject(Number(this._project.id)).subscribe();
  }

  public edit(): void {
    this.projectService.editableProject = this._project;
    this.modalService.type = ModalType.EDIT_PROJECT;
  }
}
