import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

import { NavbarModule } from './navbar/navbar.module';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

import { MediaService } from './core/medias.service';
import { GenreService } from './core/genre.service';

import {AppRouter} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NavbarModule,
    MenuModule,
    HomeModule,
    LoginModule,
    AppRouter
  ],
  bootstrap: [AppComponent],
  providers: [MediaService, GenreService]
})
export class AppModule { }
