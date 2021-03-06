import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SharedModule } from '../../shared/shared.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';

@NgModule({
  declarations: [OrderPageComponent, OrderFormComponent, ShippingFormComponent],
  imports: [SharedModule, RouterModule, BsDatepickerModule.forRoot(), ButtonsModule.forRoot()]
})
export class OrderModule {}
