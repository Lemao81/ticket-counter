import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommaSeparatingPipe } from '@pipes';

import { InfoFieldComponent } from './components/info-field/info-field.component';

@NgModule({
  declarations: [CommaSeparatingPipe, InfoFieldComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, CommaSeparatingPipe, HttpClientModule, InfoFieldComponent]
})
export class SharedModule {}
