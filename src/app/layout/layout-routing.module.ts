import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventPageComponent } from '../modules/event/components/event-page/event-page.component';
import { HomeComponent } from '../modules/home/components/home/home.component';
import { OrderPageComponent } from '../modules/order/components/order-page/order-page.component';
import { PageFrameComponent } from './page-frame/page-frame.component';

const routes: Routes = [
  {
    path: '',
    component: PageFrameComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'events',
        component: EventPageComponent
      },
      {
        path: 'order',
        component: OrderPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
