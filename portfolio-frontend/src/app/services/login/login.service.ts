import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from 'src/app/entities/user';
import {ApiRouteService} from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private apiRoute: ApiRouteService) {
  }

  public get isLogged(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  public get token(): string | null {
    return localStorage.getItem('auth_token');
  }

  public logIn(user: User): void {
    this.http.post(this.apiRoute.route + 'auth/signin', user, {headers: this.httpHeaders}).subscribe((res: any) => {
      localStorage.setItem('auth_token', res.token);
    });
  }

  public logOut(): void {
    localStorage.removeItem('auth_token');
  }
}
