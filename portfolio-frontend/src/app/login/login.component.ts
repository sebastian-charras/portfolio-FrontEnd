import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../entities/user';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private _form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this._form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(1)]],
      user: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  public get form(): FormGroup {
    return this._form;
  }

  public set form(form: FormGroup) {
    this._form = form;
  }

  public get user(): User {
    let password: string = this.form.controls['password'].value;
    let name: string = this.form.controls['user'].value;
    return {
      password: password,
      name: name,
    };
  }

  public onSubmit(event: Event): void {
    event.preventDefault;
    if (this.form.valid) {
      this.loginService.logIn(this.user);
      this.router.navigate(['portfolio']);
    }
  }
}
