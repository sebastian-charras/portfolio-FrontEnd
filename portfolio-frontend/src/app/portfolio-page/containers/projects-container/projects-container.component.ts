import { Component } from '@angular/core';
import { Project } from 'src/app/entities/project';
import { LoginService } from 'src/app/services/login/login.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent {
  private _projects: Project[] = [];

  constructor(private projectService: ProjectService, private loginService: LoginService) {
    this.fetchProjects();
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get projects() {
    return this._projects;
  }

  private fetchProjects(): void {
    this.projectService.getAll().subscribe(projects => this._projects = projects);
  }
}
