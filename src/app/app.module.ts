import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { LayoutModule } from './layout/layout.module'
import { LoginModule } from './login/login.module'

import { AppRouter } from './app.router'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    LoginModule,
    AppRouter
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
