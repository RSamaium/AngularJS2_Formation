import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar.component'
import { AppRouter } from '../../app.router'

@NgModule({
  imports: [
    CommonModule,
    AppRouter
  ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
