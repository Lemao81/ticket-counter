import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tc-validation-error-display',
  templateUrl: './validation-error-display.component.html',
  styleUrls: ['./validation-error-display.component.scss']
})
export class ValidationErrorDisplayComponent implements OnChanges {
  @Input()
  public controlName: string;
  @Input()
  public form: FormGroup;

  public isInvalid: boolean;
  public errorMessage: string;

  public ngOnChanges(changes: SimpleChanges): void {}

  constructor() {}

  ngOnInit(): void {}
}
