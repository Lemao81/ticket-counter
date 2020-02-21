import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommaSeparatingPipe } from '@pipes';

@NgModule({
  declarations: [],
  imports: [CommonModule, CommaSeparatingPipe],
  exports: [CommonModule, CommaSeparatingPipe]
})
export class SharedModule {}
