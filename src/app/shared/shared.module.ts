import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommaSeparatingPipe } from '@pipes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CommaSeparatingPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, CommaSeparatingPipe, HttpClientModule]
})
export class SharedModule {}
