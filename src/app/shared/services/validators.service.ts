import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms"


@Injectable({
    providedIn: 'root'
})
export class ValidatorServices {

    public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public canBySamu = (control: FormControl): ValidationErrors | null => {
        const value: string = control.value.trim().toLowerCase();
    
        if(value === 'samu'){
            return {
                esIgualSamu: true,
            }
        }
    
        return null;
    };

    public isValidField(form: FormGroup, field: string): boolean | null{
        return form.controls[field].errors && form.controls[field].touched; 
    }

    //validar si el password1 es igual al password2
    public isPasswordEqual(password1: string, password2: string) {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const passwordValue1 = formGroup.get(password1)?.value;
            const passwordValue2 = formGroup.get(password2)?.value;

            if(passwordValue1 != passwordValue2){
                formGroup.get(password2)?.setErrors({noEqual: true});

                return {noEqual: true};
            }

            formGroup.get(password2)?.setErrors(null);
            return null;
        }
    }

}