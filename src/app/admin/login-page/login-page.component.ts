import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  requiredPasswordLength: number = 6;

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(this.requiredPasswordLength)
    ])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) return;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
  }
}
