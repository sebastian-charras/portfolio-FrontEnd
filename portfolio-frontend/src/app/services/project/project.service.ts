import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/entities/project';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private apiRouteProvider: ApiRouteService
  ) {
    this.projectUrl = apiRouteProvider.route + 'project';
  }

  public getById(id: number): Observable<Project> {
    return this.http.get<Project>(this.projectUrl + '/' + id);
  }

  public getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

  public newProject(project: Project): Observable<any> {
    return this.http.post(this.projectUrl, project, {
      headers: this.httpHeaders,
    });
  }

  public replaceProject(id: number, project: Project): Observable<any> {
    return this.http.put(this.projectUrl + '/' + id, project, {
      headers: this.httpHeaders,
    });
  }

  public deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(this.projectUrl + '/' + id);
  }
}
