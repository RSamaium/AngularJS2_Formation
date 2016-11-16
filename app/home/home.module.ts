import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { GenrePipe, GenreFilter } from './card/genre.pipe';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [HomeComponent, CardComponent, GenrePipe, GenreFilter],
  exports: [HomeComponent]
})
export class HomeModule { }
