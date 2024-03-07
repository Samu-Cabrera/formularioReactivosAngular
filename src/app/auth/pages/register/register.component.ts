import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { canBySamu } from '../../../shared/validators/validator.function';
import { ValidatorServices } from '../../../shared/services/validators.service';
import { EmailValidatorServie } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, canBySamu]],
    password1: ['', [Validators.required]],
    password2: ['', [Validators.required]],

  }, {
    validators: [
      this.validatorService.isPasswordEqual('password1', 'password2')
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorServices,
    private emailValidator: EmailValidatorServie
  ){}

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
