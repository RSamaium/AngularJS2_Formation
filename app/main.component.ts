import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  template: `
  <app-navbar></app-navbar>
  <div class="col-sm-3 col-md-2 sidebar">
    <app-menu></app-menu>
  </div>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <router-outlet></router-outlet>
  </div>
  `
})
export class MainComponent {
  title = 'app works!';
}
