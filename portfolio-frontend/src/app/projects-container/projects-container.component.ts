import { Component } from '@angular/core';
import { Project } from '../entities/project';
import { ProjectService } from '../services/project/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent {
  private _projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.fetchProjects();
  }

  public get projects() {
    return this._projects;
  }

  private fetchProjects(): void {
    this.projectService.getAll().subscribe(projects => this._projects = projects);
  }
}
