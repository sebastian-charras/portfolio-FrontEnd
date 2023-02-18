import { Component, Input } from '@angular/core';
import { Project } from '../entities/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  private _project!: Project;

  public get project(): Project {
    return this._project;
  }

  @Input()
  public set project(project: Project) {
    this._project = project;
  }
}
