import { Component } from '@angular/core';
import { Skill } from '../entities/skill';
import { LoginService } from '../services/login/login.service';
import { SkillService } from '../services/skill/skill.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css'],
})
export class SkillsContainerComponent {
  private _skills: Skill[] = [];

  constructor(
    private skillService: SkillService,
    private loginService: LoginService
  ) {
    this.fetchSkills();
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get skills(): Skill[] {
    return this._skills;
  }

  private fetchSkills(): void {
    this.skillService.getAll().subscribe((skills) => (this._skills = skills));
  }
}
