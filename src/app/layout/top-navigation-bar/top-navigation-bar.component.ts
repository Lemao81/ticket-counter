import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent {
  constructor(private _router: Router) {}

  public navigateToBase(): void {
    this._router.navigateByUrl('/');
  }
}
