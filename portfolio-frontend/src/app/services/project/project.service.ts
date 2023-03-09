import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {Project} from 'src/app/entities/project';
import {ApiRouteService} from '../api-route/api-route.service';
import {HeaderService} from '../header/header.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectUrl: string;

  constructor(private http: HttpClient, apiRouteProvider: ApiRouteService, private headerService: HeaderService) {
    this.projectUrl = apiRouteProvider.route + 'project';
  }

  private _change = new EventEmitter<any>();

  public get change(): EventEmitter<any> {
    return this._change;
  }

  private _editableProject?: Project;

  public get editableProject(): Project | undefined {
    return this._editableProject;
  }

  public set editableProject(project: Project | undefined) {
    this._editableProject = project;
  }

  public getById(id: number): Observable<Project> {
    return this.http.get<Project>(this.projectUrl + '/' + id);
  }

  public getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

  public newProject(project: Project): Observable<any> {
    return this.http
      .post(this.projectUrl, project, {
        headers: this.headerService.headers,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public replaceProject(id: number, project: Project): Observable<any> {
    return this.http
      .put(this.projectUrl + '/' + id, project, {
        headers: this.headerService.headers,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public deleteProject(id: number): Observable<Project> {
    return this.http
      .delete<Project>(this.projectUrl + '/' + id, {
        headers: this.headerService.headers,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }
}
