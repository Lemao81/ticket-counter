import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { PageFrameComponent } from './page-frame/page-frame.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [SideNavigationBarComponent, TopNavigationBarComponent, PageFrameComponent, RootComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
