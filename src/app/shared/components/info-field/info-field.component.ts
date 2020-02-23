import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tc-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.scss']
})
export class InfoFieldComponent implements OnInit {
  @Input()
  public header: string;
  @Input()
  public content: string;
  @Input()
  public isUrl: boolean;

  constructor() {}

  ngOnInit(): void {}
}
