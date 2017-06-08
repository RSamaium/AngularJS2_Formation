import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { LayoutComponent } from './layout.component'

import { NavbarModule } from './navbar/navbar.module'
import { MenuModule } from './menu/menu.module'
import { HomeModule } from './home/home.module'
import { MediaModule } from './media/media.module'

import { LayoutRouter } from './layout.router'

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    MenuModule,
    HomeModule,
    MediaModule,
    LayoutRouter
  ]
})
export class LayoutModule { }
