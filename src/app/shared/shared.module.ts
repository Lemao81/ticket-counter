import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommaSeparatingPipe } from '@pipes';

import { InfoFieldComponent } from './components/info-field/info-field.component';
import { TextFormFieldComponent } from './components/text-form-field/text-form-field.component';
import { ValidationErrorDisplayComponent } from './components/validation-error-display/validation-error-display.component';
import { ZipLocationComponent } from './components/zip-location/zip-location.component';
import { ValidationErrorDisplayDirective } from './directives/validation-error-display.directive';

@NgModule({
  declarations: [
    CommaSeparatingPipe,
    InfoFieldComponent,
    ValidationErrorDisplayComponent,
    ValidationErrorDisplayDirective,
    ZipLocationComponent,
    TextFormFieldComponent
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    CommaSeparatingPipe,
    HttpClientModule,
    InfoFieldComponent,
    ValidationErrorDisplayDirective,
    ReactiveFormsModule,
    ZipLocationComponent,
    TextFormFieldComponent
  ]
})
export class SharedModule {}
