import { Component, Input } from '@angular/core';
import { Skill } from '../entities/skill';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  private _skill!: Skill;

  constructor(private loginService: LoginService) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get skill(): Skill {
    return this._skill;
  }

  @Input()
  public set skill(skill: Skill) {
    this._skill = skill;
  }
}
