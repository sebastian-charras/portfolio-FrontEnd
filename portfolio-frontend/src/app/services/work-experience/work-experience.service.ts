import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from 'src/app/entities/workExperience';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  private workExperienceUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    apiRouteProvider: ApiRouteService
  ) {
    this.workExperienceUrl = apiRouteProvider.route + 'workExperience';
  }

  public getById(id: number): Observable<WorkExperience> {
    return this.http.get<WorkExperience>(this.workExperienceUrl + '/' + id);
  }

  public getAll(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(this.workExperienceUrl);
  }

  public newWorkExperience(workExperience: WorkExperience): Observable<any> {
    return this.http.post(this.workExperienceUrl, workExperience, {
      headers: this.httpHeaders,
    });
  }

  public replaceWorkExperience(
    id: number,
    workExperience: WorkExperience
  ): Observable<any> {
    return this.http.put(this.workExperienceUrl + '/' + id, workExperience, {
      headers: this.httpHeaders,
    });
  }

  public deleteWorkExperience(id: number): Observable<WorkExperience> {
    return this.http.delete<WorkExperience>(this.workExperienceUrl + '/' + id);
  }

  public addInstitution(
    workExperienceId: number,
    institutionId: number
  ): Observable<any> {
    let httpParams: HttpParams = new HttpParams();
    httpParams.append('institutionId', institutionId);
    return this.http.put(this.workExperienceUrl + '/' + workExperienceId, {
      headers: this.httpHeaders,
      params: httpParams,
    });
  }

  public removeInstitution(
    workExperienceId: number,
    institutionId: number
  ): Observable<any> {
    let httpParams: HttpParams = new HttpParams();
    httpParams.append('institutionId', institutionId);
    return this.http.delete<WorkExperience>(
      this.workExperienceUrl + '/' + workExperienceId,
      {
        params: httpParams,
      }
    );
  }
}
