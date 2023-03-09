import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ModalType} from 'src/app/entities/modalType';
import {Skill} from 'src/app/entities/skill';
import {ModalService} from 'src/app/services/modal/modal.service';
import {SkillService} from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill-creator-modal',
  templateUrl: './skill-creator-modal.component.html',
  styleUrls: ['./skill-creator-modal.component.css'],
})
export class SkillCreateModalComponent {
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private skillService: SkillService,
    private router: Router
  ) {
    this._form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      percentage: ['', [Validators.required]],
    });
  }

  private _form: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }

  public set form(form: FormGroup) {
    this._form = form;
  }

  public get skill(): Skill {
    let name: string = this.form.controls['name'].value;
    let percentage: number = Number(this.form.controls['percentage'].value);
    return {
      id: null,
      name: name,
      percentage: percentage,
    };
  }

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }

  public onSubmit(event: Event): void {
    if (this.form.valid) {
      this.modalService.type = ModalType.HIDDEN;
      this.skillService.newSkill(this.skill).subscribe();
    }
  }
}
