import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { Skill } from 'src/app/entities/skill';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  private _skill!: Skill;
  constructor(
    private loginService: LoginService,
    private skillService: SkillService,
    private modalService: ModalService
  ) {}

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

  public delete(): void {
    this.skillService.deleteSkill(Number(this._skill.id)).subscribe();
  }

  public edit(): void {
    this.skillService.editableSkill = this._skill;
    this.modalService.type = ModalType.EDIT_SKILL;
  }
}
