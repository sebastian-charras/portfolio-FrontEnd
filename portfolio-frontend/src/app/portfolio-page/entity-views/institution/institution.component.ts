import {Component, Input} from '@angular/core';
import {Institution} from 'src/app/entities/institution';
import {ModalType} from 'src/app/entities/modalType';
import {InstitutionService} from 'src/app/services/institution/institution.service';
import {LoginService} from 'src/app/services/login/login.service';
import {ModalService} from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css'],
})
export class InstitutionComponent {
  constructor(
    private loginService: LoginService,
    private institutionService: InstitutionService,
    private modalService: ModalService
  ) {
  }

  private _institution!: Institution;

  public get institution(): Institution {
    return this._institution;
  }

  @Input()
  public set institution(institution: Institution) {
    this._institution = institution;
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public delete() {
    this.institutionService
      .isReferenced(Number(this._institution.id))
      .subscribe((isReferenced) => {
        if (isReferenced) {
          this.modalService.type = ModalType.ERROR_DELETE;
        } else {
          this.institutionService
            .deleteInstitution(Number(this._institution.id))
            .subscribe();
        }
      });
  }

  public edit() {
    this.institutionService.editableInstitution = this._institution;
    this.modalService.type = ModalType.EDIT_INSTITUTION;
  }
}
