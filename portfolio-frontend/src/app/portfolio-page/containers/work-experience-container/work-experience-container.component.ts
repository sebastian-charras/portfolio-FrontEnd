import { Component } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { WorkExperience } from 'src/app/entities/workExperience';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { WorkExperienceService } from 'src/app/services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience-container',
  templateUrl: './work-experience-container.component.html',
  styleUrls: ['./work-experience-container.component.css'],
})
export class WorkExperienceContainerComponent {
  private _workExperiences: WorkExperience[] = [];

  constructor(
    private workExperienceService: WorkExperienceService,
    private loginService: LoginService,
    private modalService: ModalService
  ) {
    this.fetchWorkExperience();
    this.workExperienceService.change.subscribe(() =>
      this.fetchWorkExperience()
    );
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get workExperiences(): WorkExperience[] {
    return this._workExperiences;
  }

  private fetchWorkExperience(): void {
    this.workExperienceService
      .getAll()
      .subscribe(
        (workExperiences) => (this._workExperiences = workExperiences)
      );
  }

  public showCreateModal(): void {
    this.modalService.type = ModalType.CREATE_WORK_EXPERIENCE;
  }
}
