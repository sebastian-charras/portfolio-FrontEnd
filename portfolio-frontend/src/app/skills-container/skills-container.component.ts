import { Component } from '@angular/core';
import { Skill } from '../entities/skill';
import { SkillService } from '../services/skill/skill.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css'],
})
export class SkillsContainerComponent {
  private _skills: Skill[] = [];

  constructor(private skillService: SkillService) {
    this.fetchSkills();
  }

  public get skills(): Skill[] {
    return this._skills;
  }

  private fetchSkills(): void {
    this.skillService.getAll().subscribe((skills) => (this._skills = skills));
  }
}
