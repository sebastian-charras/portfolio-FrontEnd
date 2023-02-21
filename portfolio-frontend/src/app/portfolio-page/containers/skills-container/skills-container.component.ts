import { Component } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { Skill } from 'src/app/entities/skill';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css'],
})
export class SkillsContainerComponent {
  private _skills: Skill[] = [];

  constructor(
    private skillService: SkillService,
    private loginService: LoginService,
    private modalService: ModalService
  ) {
    this.fetchSkills();
    this.skillService.change.subscribe(() => this.fetchSkills());
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

  public showCreateModal(): void {
    this.modalService.type = ModalType.CREATE_SKILL;
  }

}
