import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { LayoutComponent } from './layout.component'

import { NavbarModule } from './navbar/navbar.module'
import { MenuModule } from './menu/menu.module'
import { HomeModule } from './home/home.module'

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    MenuModule,
    HomeModule
  ]
})
export class LayoutModule { }
