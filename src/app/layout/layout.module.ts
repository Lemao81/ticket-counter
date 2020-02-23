import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { PageFrameComponent } from './page-frame/page-frame.component';
import { RootComponent } from './root/root.component';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { EventModule } from '../modules/event/event.module';

@NgModule({
  declarations: [SideNavigationBarComponent, TopNavigationBarComponent, PageFrameComponent, RootComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule, EventModule]
})
export class LayoutModule {}
