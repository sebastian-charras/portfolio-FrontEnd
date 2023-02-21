import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiRouteService } from '../api-route/api-route.service';
import { Education } from 'src/app/entities/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private _change = new EventEmitter<any>();
  private _editableEducation?: Education;
  private educationUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, apiRouteProvider: ApiRouteService) {
    this.educationUrl = apiRouteProvider.route + 'education';
  }

  public getById(id: number): Observable<Education> {
    return this.http.get<Education>(this.educationUrl + '/' + id);
  }

  public getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.educationUrl);
  }

  public newEducation(education: Education): Observable<any> {
    return this.http
      .post(this.educationUrl, education, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this.change.emit()));
  }

  public replaceEducation(id: number, education: Education): Observable<any> {
    return this.http
      .put(this.educationUrl + '/' + id, education, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this.change.emit()));
  }

  public deleteEducation(id: number): Observable<Education> {
    return this.http
      .delete<Education>(this.educationUrl + '/' + id)
      .pipe(tap((_: any) => this.change.emit()));
  }

  public addInstitution(
    educationId: number,
    institutionId: number
  ): Observable<any> {
    return this.http
      .put(
        this.educationUrl + '/' + educationId + '/institution/' + institutionId,
        {
          headers: this.httpHeaders,
        }
      )
      .pipe(tap((_: any) => this.change.emit()));
  }

  public removeInstitution(
    educationId: number,
  ): Observable<any> {
    return this.http
      .delete<Education>(this.educationUrl + '/' + educationId + '/institution')
      .pipe(tap((_: any) => this.change.emit()));
  }

  public get change(): EventEmitter<any> {
    return this._change;
  }

  public get editableEducation(): Education | undefined {
    return this._editableEducation;
  }

  public set editableEducation(education: Education | undefined) {
    this._editableEducation = education;
  }
}
