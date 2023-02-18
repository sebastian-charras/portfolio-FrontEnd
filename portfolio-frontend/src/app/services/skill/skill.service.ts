import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/entities/skill';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private skillUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private apiRouteProvider: ApiRouteService
  ) {
    this.skillUrl = apiRouteProvider.route + 'skill';
  }

  public getById(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.skillUrl + '/' + id);
  }

  public getAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillUrl);
  }

  public newSkill(skill: Skill): Observable<any> {
    return this.http.post(this.skillUrl, skill, {
      headers: this.httpHeaders,
    });
  }

  public replaceSkill(id: number, skill: Skill): Observable<any> {
    return this.http.put(this.skillUrl + '/' + id, skill, {
      headers: this.httpHeaders,
    });
  }

  public deleteSkill(id: number): Observable<Skill> {
    return this.http.delete<Skill>(this.skillUrl + '/' + id);
  }
}
