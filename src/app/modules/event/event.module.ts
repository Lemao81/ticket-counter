import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';
import { EventListComponent } from './components/event-list/event-list.component';

@NgModule({
  declarations: [EventListComponent, EventListItemComponent],
  imports: [SharedModule]
})
export class EventModule {}
