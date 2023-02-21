import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiRouteService } from '../api-route/api-route.service';
import { Education } from 'src/app/entities/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educationUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    apiRouteProvider: ApiRouteService
  ) {
    this.educationUrl = apiRouteProvider.route + 'education';
  }

  public getById(id: number): Observable<Education> {
    return this.http.get<Education>(this.educationUrl + '/' + id);
  }

  public getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.educationUrl);
  }

  public newEducation(education: Education): Observable<any> {
    return this.http.post(this.educationUrl, education, {
      headers: this.httpHeaders,
    });
  }

  public replaceEducation(id: number, education: Education): Observable<any> {
    return this.http.put(this.educationUrl + '/' + id, education, {
      headers: this.httpHeaders,
    });
  }

  public deleteEducation(id: number): Observable<Education> {
    return this.http.delete<Education>(this.educationUrl + '/' + id);
  }

  public addInstitution(
    educationId: number,
    institutionId: number
  ): Observable<any> {
    let httpParams: HttpParams = new HttpParams();
    httpParams.append('institutionId', institutionId);
    return this.http.put(this.educationUrl + '/' + educationId, {
      headers: this.httpHeaders,
      params: httpParams,
    });
  }

  public removeInstitution(
    educationId: number,
    institutionId: number
  ): Observable<any> {
    let httpParams: HttpParams = new HttpParams();
    httpParams.append('institutionId', institutionId);
    return this.http.delete<Education>(this.educationUrl + '/' + educationId, {
      params: httpParams,
    });
  }
}
