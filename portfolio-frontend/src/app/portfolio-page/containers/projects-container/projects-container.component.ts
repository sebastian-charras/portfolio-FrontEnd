import { Component } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { Project } from 'src/app/entities/project';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
})
export class ProjectsContainerComponent {
  private _projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private loginService: LoginService,
    private modalService: ModalService
  ) {
    this.fetchProjects();
    this.projectService.change.subscribe(() => this.fetchProjects());
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get projects() {
    return this._projects;
  }

  private fetchProjects(): void {
    this.projectService
      .getAll()
      .subscribe((projects) => (this._projects = projects));
  }

  public showCreateModal(): void {
    this.modalService.type = ModalType.CREATE_PROJECT;
  }
}
