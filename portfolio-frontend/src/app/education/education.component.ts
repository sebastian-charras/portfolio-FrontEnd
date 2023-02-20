import { Component, Input } from '@angular/core';
import { Education } from '../entities/education';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  private _education!: Education;

  constructor(private loginService: LoginService) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get education(): Education {
    return this._education;
  }

  @Input()
  public set education(education: Education) {
    this._education = education;
  }
}
