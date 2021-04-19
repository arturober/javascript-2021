import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[sameValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: SameValueDirective, multi: true}]
})
export class SameValueDirective implements Validator{

  constructor() { }

  validate(group: FormGroup): ValidationErrors {
    const campos = Object.keys(group.controls);
    if (campos.length === 2 && group.get(campos[0]).value !== group.get(campos[1]).value) {
      return {sameValue: true};
    }

    return null;
  }

}
