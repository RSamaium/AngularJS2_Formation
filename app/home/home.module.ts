import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { GenrePipe, GenreFilter } from './card/genre.pipe';
import { FormsModule } from '@angular/forms';
import { HomeRouting } from './home.router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouting
  ],
  declarations: [HomeComponent, CardComponent, GenrePipe, GenreFilter],
  exports: [HomeComponent]
})
export class HomeModule { }
