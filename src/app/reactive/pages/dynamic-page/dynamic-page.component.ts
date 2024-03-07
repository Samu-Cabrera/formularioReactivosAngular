import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {


  public dynamicForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    favoritos: this.fb.array([
      ['prod1', Validators.required],
      ['prod2', Validators.required]
    ])
  });


  constructor(private fb: FormBuilder){}

  get favoritosArr(){
    return this.dynamicForm.get('favoritos') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return this.dynamicForm.controls[field].errors
    && this.dynamicForm.controls[field].touched;
  }

  isValidFieldInArray(formArr: FormArray, index: number){
    return formArr.controls[index].errors && formArr.controls[index].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.dynamicForm.controls[field]) return null;

    const errors = this.dynamicForm.controls[field].errors || {};

    for(let keys of Object.keys(errors)){
      switch(keys){
        case 'required': return 'Este campo es requerido';
        case 'minlength': return `Se requiere ${ errors['minlength'].requiredLength } caracteres`;
      }
    }

    return null;

  }

  onDelete(index: number): void{
    this.favoritosArr.removeAt(index);
  }

  onSubmit(): void {
    if(this.dynamicForm.invalid){
      this.dynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.dynamicForm.value);

    this.dynamicForm.reset();
  }

}
