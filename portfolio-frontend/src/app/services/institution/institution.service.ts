import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Institution } from 'src/app/entities/institution';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  private _change = new EventEmitter<any>();
  private _editableInstitution?: Institution;
  private institutionUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, apiRouteProvider: ApiRouteService) {
    this.institutionUrl = apiRouteProvider.route + 'institution';
  }

  public getById(id: number): Observable<Institution> {
    return this.http.get<Institution>(this.institutionUrl + '/' + id);
  }

  public getAll(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.institutionUrl);
  }

  public newInstitution(institution: Institution): Observable<any> {
    return this.http
      .post(this.institutionUrl, institution, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public replaceInstitution(
    id: number,
    institution: Institution
  ): Observable<any> {
    return this.http
      .put(this.institutionUrl + '/' + id, institution, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public deleteInstitution(id: number): Observable<Institution> {
    return this.http
      .delete<Institution>(this.institutionUrl + '/' + id)
      .pipe(tap((_: any) => this._change.emit()));
  }

  public get change(): EventEmitter<any> {
    return this._change;
  }

  public get editableInstitution(): Institution | undefined {
    return this._editableInstitution;
  }

  public set editableInstitution(institution: Institution | undefined) {
    this._editableInstitution = institution;
  }

  public isReferenced(id: number): Observable<boolean> {
    return this.http.get<boolean>(
      this.institutionUrl + '/' + id + '/isReferenced'
    );
  }
}
