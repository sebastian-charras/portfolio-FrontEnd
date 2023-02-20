import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Skill } from 'src/app/entities/skill';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private _change = new EventEmitter<any>();
  private _editableSkill?: Skill;
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
    return this.http
      .post(this.skillUrl, skill, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public replaceSkill(id: number, skill: Skill): Observable<any> {
    return this.http
      .put(this.skillUrl + '/' + id, skill, {
        headers: this.httpHeaders,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public deleteSkill(id: number): Observable<Skill> {
    return this.http
      .delete<Skill>(this.skillUrl + '/' + id)
      .pipe(tap((_: any) => this._change.emit()));
  }

  public get change(): EventEmitter<any> {
    return this._change;
  }

  public get editableSkill(): Skill | undefined {
    return this._editableSkill;
  }

  public set editableSkill(skill: Skill | undefined) {
    this._editableSkill = skill;
  }
}
