import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  //valores, validaciones
  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, Validators.required]
  });

  public product = {
    name: 'Lenovo',
    price: 1000,
    inStorage: 3
  }

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.product);
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for(let keys of Object.keys(errors)){
      switch(keys){
        case 'required': return 'Este campo es requerido';
        case 'minlength': return `Se requiere ${ errors['minlength'].requiredLength } caracteres`;
      }
    }

    return null;

  }

  onSave(): void {

    if(this.myForm.invalid) return;

    console.log( this.myForm.value );

    //reestablecer valores 
    this.myForm.reset({
      price: 0,
      inStorage: 0
    })
  }

}
