import { Component, Input } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { WorkExperience } from 'src/app/entities/workExperience';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { WorkExperienceService } from 'src/app/services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  private _workExperience!: WorkExperience;

  constructor(
    private loginService: LoginService,
    private modalService: ModalService,
    private workExperienceService: WorkExperienceService
  ) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get workExperience(): WorkExperience {
    return this._workExperience;
  }

  @Input()
  public set workExperience(workExperience: WorkExperience) {
    this._workExperience = workExperience;
  }

  public edit(): void {
    this.workExperienceService.editableWorkExperience = this._workExperience;
    this.modalService.type = ModalType.EDIT_WORK_EXPERIENCE;
  }

  public delete(): void {
    this.workExperienceService
      .deleteWorkExperience(Number(this._workExperience.id))
      .subscribe();
  }
}
