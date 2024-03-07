import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, delay, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class EmailValidatorServie implements AsyncValidator {
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;

        const httpCallObservable = new Observable<ValidationErrors | null>((suscriber) => {
            if(email === 'samu@gmail.com'){
                suscriber.next({email: true});
                suscriber.complete();
            }
            suscriber.next(null);
            suscriber.complete();
        }).pipe(
            delay(3000)
        );

        return httpCallObservable;
    }


    
}