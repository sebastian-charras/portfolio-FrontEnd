import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/entities/person';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personUrl: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient,
    private apiRouteProvider: ApiRouteService
  ) {
    this.personUrl = apiRouteProvider.route + 'person';
  }

  public get(): Observable<Person> {
    return this.http.get<Person>(this.personUrl);
  }

  public replacePerson(id: number, person: Person): Observable<any> {
    return this.http.put(this.personUrl + '/' + id, person, {
      headers: this.httpHeaders,
    });
  }
}
