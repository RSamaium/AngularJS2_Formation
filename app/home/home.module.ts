import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { GenrePipe, GenreFilter } from './card/genre.pipe';
import { FormsModule } from '@angular/forms';

import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginModule
  ],
  declarations: [HomeComponent, CardComponent, GenrePipe, GenreFilter],
  exports: [HomeComponent]
})
export class HomeModule { }
