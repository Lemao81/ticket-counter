import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventPageComponent } from './components/event-page/event-page.component';

@NgModule({
  declarations: [EventListComponent, EventListItemComponent, EventDetailsComponent, EventPageComponent],
  imports: [SharedModule]
})
export class EventModule {}
