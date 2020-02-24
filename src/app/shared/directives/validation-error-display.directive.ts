import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationMessage } from '@constants';

@Directive({
  selector: '[tcErrorDisplay]'
})
export class ValidationErrorDisplayDirective implements AfterViewInit {
  private nativeElement: HTMLElement;
  private control: AbstractControl;
  private displayElement: HTMLElement;

  @Input('tcForm')
  public form: FormGroup;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement as HTMLElement;
  }

  public ngAfterViewInit(): void {
    const formControlName = this.nativeElement.getAttribute('formControlName');
    this.control = this.form.get(formControlName);
    if (this.control) {
      this.nativeElement.addEventListener('change', () => this.onChange());
      this.displayElement = this.nativeElement.nextSibling as HTMLElement;
      if (this.displayElement && this.displayElement.classList) {
        this.displayElement.classList.add('invalid');
      }
    }
  }

  private onChange(): any {
    if (this.control) {
      const errorMessages = [];
      for (const errorKey in this.control.errors) {
        if (this.control.errors.hasOwnProperty(errorKey)) {
          switch (errorKey) {
            case 'required':
              errorMessages.push(ValidationMessage.REQUIRED);
              break;
            case 'min':
              errorMessages.push(ValidationMessage.MIN);
              break;
            case 'max':
              errorMessages.push(ValidationMessage.MAX);
              break;
            case 'email':
              errorMessages.push(ValidationMessage.EMAIL);
              break;
            default:
              errorMessages.push(this.control.errors[errorKey]);
              break;
          }
        }
      }
      const join = errorMessages.join('. ') + (errorMessages.length ? '.' : '');
      this.displayElement.textContent = join;
      if (this.control.dirty && this.control.invalid) {
        this.nativeElement.classList.add('invalid');
      } else {
        this.nativeElement.classList.remove('invalid');
      }
    }
  }
}
