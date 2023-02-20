import { Component, Input } from '@angular/core';
import { Project } from '../entities/project';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  private _project!: Project;

  constructor(private loginService: LoginService) {}

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
}
