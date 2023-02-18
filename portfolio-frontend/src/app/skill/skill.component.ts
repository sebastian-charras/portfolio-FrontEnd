import { Component, Input } from '@angular/core';
import { Skill } from '../entities/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  private _skill!: Skill;

  public get skill(): Skill {
    return this._skill;
  }

  @Input()
  public set skill(skill: Skill) {
    this._skill = skill;
  }
}
