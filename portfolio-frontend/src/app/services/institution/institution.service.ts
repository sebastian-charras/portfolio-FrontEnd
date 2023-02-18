import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/entities/institution';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {


  private institutionUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private apiRouteProvider: ApiRouteService
  ) {
    this.institutionUrl = apiRouteProvider.route + 'institution';
  }

  public getById(id: number): Observable<Institution> {
    return this.http.get<Institution>(this.institutionUrl + '/' + id);
  }

  public getAll(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.institutionUrl);
  }

  public newInstitution(institution: Institution): Observable<any> {
    return this.http.post(this.institutionUrl, institution, {
      headers: this.httpHeaders,
    });
  }

  public replaceInstitution(id: number, institution: Institution): Observable<any> {
    return this.http.put(this.institutionUrl + '/' + id, institution, {
      headers: this.httpHeaders,
    });
  }

  public deleteInstitution(id: number): Observable<Institution> {
    return this.http.delete<Institution>(this.institutionUrl + '/' + id);
  }
}