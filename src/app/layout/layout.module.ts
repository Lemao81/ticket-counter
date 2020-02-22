import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageFrameComponent } from './page-frame/page-frame.component';
import { RootComponent } from './root/root.component';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';

@NgModule({
  declarations: [SideNavigationBarComponent, TopNavigationBarComponent, PageFrameComponent, RootComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule {}
