import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styles: ``
})
export class SwitchPageComponent {
  public myForm: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificacion: [true, Validators.required],
    terminosCondiciones: [false, Validators.requiredTrue]
  })

  constructor(private fb: FormBuilder){}

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched;
      return;
    }
  }
}
