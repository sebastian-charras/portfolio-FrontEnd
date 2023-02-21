import { Component } from '@angular/core';
import { Institution } from 'src/app/entities/institution';
import { ModalType } from 'src/app/entities/modalType';
import { InstitutionService } from 'src/app/services/institution/institution.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-institution-container',
  templateUrl: './institution-container.component.html',
  styleUrls: ['./institution-container.component.css'],
})
export class InstitutionContainerComponent {
  private _institutions: Institution[] = [];

  constructor(
    private institutionService: InstitutionService,
    private loginService: LoginService,
    private modalService: ModalService
  ) {
    this.fetchInstitutions();
    this.institutionService.change.subscribe(() => this.fetchInstitutions());
  }

  public get isLogged(): boolean {
    return this.loginService.isLogged;
  }

  public get institutions() {
    return this._institutions;
  }

  private fetchInstitutions(): void {
    this.institutionService
      .getAll()
      .subscribe((institutions) => (this._institutions = institutions));
  }

  public showCreateModal(): void {
    this.modalService.type = ModalType.CREATE_INSTITUTION;
  }
}
