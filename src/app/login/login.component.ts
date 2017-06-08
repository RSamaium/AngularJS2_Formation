import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'


export function isEmail(input: FormControl) {
  return /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(input.value) ? null : { email: true }
}

export function validPassword(input: FormControl) {
  let invalid = false,
    errors: any = {},
    val = input.value;
  if (val.length < 8) {
    errors.length = true;
    invalid = true;
  }
  if (!/[A-Z]/.test(val)) {
    errors.uppercase = true;
    invalid = true;
  }
  if (!/[0-9]/.test(val)) {
    errors.number = true;
    invalid = true;
  }
  errors.invalidPassword = invalid;
  return !invalid ? null : errors;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .signup {
        width: 100%
      }

      form.ng-submitted .email.ng-invalid,
      form.ng-submitted .password.ng-invalid {
        border: 1px solid red;
        background: #f55555;
        color: white;
      }

    `
  ]
})

export class LoginComponent implements OnInit {

  form: FormGroup
  username: FormControl
  password: FormControl
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.username = new FormControl('', [
      Validators.required,
      isEmail
    ])
    this.password = new FormControl('', [
      Validators.required,
      validPassword
    ])
    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password
    })
  }

  submit() {
    console.log(this.password.errors) // récupérer les erreurs
    console.log(this.form.value) // récupérer l'objet
    this.submitted = true
  }

}
