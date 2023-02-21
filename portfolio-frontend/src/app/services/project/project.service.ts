import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Project } from 'src/app/entities/project';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _change = new EventEmitter<any>();
  private _editableProject?: Project;
  private projectUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, apiRouteProvider: ApiRouteService) {
    this.projectUrl = apiRouteProvider.route + 'project';
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
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public replaceProject(id: number, project: Project): Observable<any> {
    return this.http
      .put(this.projectUrl + '/' + id, project, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public deleteProject(id: number): Observable<Project> {
    return this.http
      .delete<Project>(this.projectUrl + '/' + id)
      .pipe(tap((_: any) => this._change.emit()));
  }

  public get change(): EventEmitter<any> {
    return this._change;
  }

  public get editableProject(): Project | undefined {
    return this._editableProject;
  }

  public set editableProject(project: Project | undefined) {
    this._editableProject = project;
  }
}
