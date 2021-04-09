import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input() minDate!: string;

  constructor() { }

  validate(control: FormControl): ValidationErrors {
    if (this.minDate && control.value) {
      if(control.value < this.minDate) {
        return {minDate: true};
      }
    }

    return null;
  }

}
