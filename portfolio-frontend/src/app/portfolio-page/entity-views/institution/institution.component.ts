import { Component, Input } from '@angular/core';
import { Institution } from 'src/app/entities/institution';
import { ModalType } from 'src/app/entities/modalType';
import { InstitutionService } from 'src/app/services/institution/institution.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css'],
})
export class InstitutionComponent {
  private _institution!: Institution;

  constructor(
    private loginService: LoginService,
    private institutionService: InstitutionService,
    private modalService: ModalService
  ) {}

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get institution(): Institution {
    return this._institution;
  }

  @Input()
  public set institution(institution: Institution) {
    this._institution = institution;
  }

  public delete() {
    this.institutionService
      .deleteInstitution(Number(this._institution.id))
      .subscribe();
  }

  public edit() {
    this.institutionService.editableInstitution = this._institution;
    this.modalService.type = ModalType.EDIT_INSTITUTION;
  }
}
