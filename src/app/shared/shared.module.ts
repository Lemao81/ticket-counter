import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommaSeparatingPipe } from '@pipes';

import { InfoFieldComponent } from './components/info-field/info-field.component';
import { ValidationErrorDisplayComponent } from './components/validation-error-display/validation-error-display.component';
import { ValidationErrorDisplayDirective } from './directives/validation-error-display.directive';

@NgModule({
  declarations: [
    CommaSeparatingPipe,
    InfoFieldComponent,
    ValidationErrorDisplayComponent,
    ValidationErrorDisplayDirective
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, CommaSeparatingPipe, HttpClientModule, InfoFieldComponent, ValidationErrorDisplayDirective]
})
export class SharedModule {}
