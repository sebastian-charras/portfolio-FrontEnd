import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Institution} from 'src/app/entities/institution';
import {ModalType} from 'src/app/entities/modalType';
import {InstitutionService} from 'src/app/services/institution/institution.service';
import {ModalService} from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-institution-editor-modal',
  templateUrl: './institution-editor-modal.component.html',
  styleUrls: ['./institution-editor-modal.component.css'],
})
export class InstitutionEditorModalComponent {
  private originalInstitution?: Institution =
    this.institutionService.editableInstitution;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private institutionService: InstitutionService
  ) {
    this._form = this.formBuilder.group({
      name: [
        this.institutionService.editableInstitution?.name,
        [Validators.required],
      ],
      logoUrl: [
        this.institutionService.editableInstitution?.logoUrl,
        [Validators.required],
      ],
    });
  }

  private _form: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }

  public set form(form: FormGroup) {
    this._form = form;
  }

  public get institution(): Institution {
    let name: string = this.form.controls['name'].value;
    let logoUrl: string = this.form.controls['logoUrl'].value;

    return {
      id: null,
      name: name,
      logoUrl: logoUrl,
    };
  }

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }

  public onSubmit(event: Event): void {
    if (this.originalInstitution !== undefined && this.form.valid) {
      this.institutionService.editableInstitution = undefined;
      this.modalService.type = ModalType.HIDDEN;
      this.institutionService
        .replaceInstitution(
          Number(this.originalInstitution.id),
          this.institution
        )
        .subscribe();
    }
  }
}
