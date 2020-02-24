import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tc-text-form-field',
  templateUrl: './text-form-field.component.html',
  styleUrls: ['./text-form-field.component.scss']
})
export class TextFormFieldComponent implements OnInit {
  @Input()
  public label: string;
  @Input()
  public controlName: string;
  @Input()
  public placeHolder: string;

  constructor() {}

  ngOnInit(): void {}
}
