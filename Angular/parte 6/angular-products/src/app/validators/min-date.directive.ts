import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input() minDate: string;

  constructor() { }

  validate(campoFecha: FormControl): ValidationErrors {
    if (campoFecha.value && campoFecha.value < this.minDate) {
      return {minDate: this.minDate};
    }

    return null;
  }


}
