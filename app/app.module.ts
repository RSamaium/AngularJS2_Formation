import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';

import { MediaService } from './core/medias.service';
import { GenreService } from './core/genre.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    MenuModule,
    HomeModule
  ],
  bootstrap: [AppComponent],
  providers: [MediaService, GenreService]
})
export class AppModule { }
