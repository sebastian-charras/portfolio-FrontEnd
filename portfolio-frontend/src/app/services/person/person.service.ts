import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Person } from 'src/app/entities/person';
import { ApiRouteService } from '../api-route/api-route.service';
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private _change = new EventEmitter<any>();
  private _editablePerson?: Person;
  private personUrl: string;
  constructor(private http: HttpClient, apiRouteProvider: ApiRouteService, private headerService: HeaderService) {
    this.personUrl = apiRouteProvider.route + 'person';
  }

  public get(): Observable<Person> {
    return this.http.get<Person>(this.personUrl);
  }

  public replacePerson(id: number, person: Person): Observable<any> {
    return this.http
      .put(this.personUrl + '/' + id, person, {
        headers: this.headerService.headers,
      })
      .pipe(tap((_: any) => this._change.emit()));
  }

  public get change(): EventEmitter<any> {
    return this._change;
  }

  public get editablePerson(): Person | undefined {
    return this._editablePerson;
  }

  public set editablePerson(project: Person | undefined) {
    this._editablePerson = project;
  }
}
