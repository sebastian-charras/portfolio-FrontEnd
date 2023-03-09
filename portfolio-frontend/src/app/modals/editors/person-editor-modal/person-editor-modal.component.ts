import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalType} from 'src/app/entities/modalType';
import {Person} from 'src/app/entities/person';
import {ModalService} from 'src/app/services/modal/modal.service';
import {PersonService} from 'src/app/services/person/person.service';

@Component({
  selector: 'app-person-editor-modal',
  templateUrl: './person-editor-modal.component.html',
  styleUrls: ['./person-editor-modal.component.css'],
})
export class PersonEditorModalComponent {
  private originalPerson?: Person = this.personService.editablePerson;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private personService: PersonService
  ) {
    this._form = this.formBuilder.group({
      name: [this.personService.editablePerson?.name, [Validators.required]],
      surname: [
        this.personService.editablePerson?.surname,
        [Validators.required],
      ],
      title: [this.personService.editablePerson?.title, [Validators.required]],
      description: [
        this.personService.editablePerson?.description,
        [Validators.required],
      ],
      email: [this.personService.editablePerson?.email, [Validators.required]],
      githubUrl: [
        this.personService.editablePerson?.githubUrl,
        [Validators.required],
      ],
      linkedinUrl: [
        this.personService.editablePerson?.linkedinUrl,
        [Validators.required],
      ],
      heroImageUrl: [
        this.personService.editablePerson?.heroImageUrl,
        [Validators.required],
      ],
      profilePictureUrl: [
        this.personService.editablePerson?.profilePictureUrl,
        [Validators.required],
      ],
      catchPhrase: [
        this.personService.editablePerson?.catchPhrase,
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

  public get person(): Person {
    let name: string = this.form.controls['name'].value;
    let surname: string = this.form.controls['surname'].value;
    let title: string = this.form.controls['title'].value;
    let description: string = this.form.controls['description'].value;
    let email: string = this.form.controls['email'].value;
    let githubUrl: string = this.form.controls['githubUrl'].value;
    let linkedinUrl: string = this.form.controls['linkedinUrl'].value;
    let heroImageUrl: string = this.form.controls['heroImageUrl'].value;
    let profilePictureUrl: string =
      this.form.controls['profilePictureUrl'].value;
    let catchPhrase: string = this.form.controls['catchPhrase'].value;

    return {
      id: null,
      name: name,
      surname: surname,
      title: title,
      description: description,
      email: email,
      githubUrl: githubUrl,
      linkedinUrl: linkedinUrl,
      heroImageUrl: heroImageUrl,
      profilePictureUrl: profilePictureUrl,
      catchPhrase: catchPhrase,
    };
  }

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }

  public onSubmit(event: Event): void {
    if (this.originalPerson !== undefined && this.form.valid) {
      this.personService.editablePerson = undefined;
      this.modalService.type = ModalType.HIDDEN;
      this.personService
        .replacePerson(Number(this.originalPerson.id), this.person)
        .subscribe();
    }
  }
}
