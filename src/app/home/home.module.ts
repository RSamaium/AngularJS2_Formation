import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component'
import { CardComponent } from './card/card.component'

import { GenrePipe, GenreFilter } from './card/genre.pipe'


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
    HomeComponent, 
    CardComponent,
    GenrePipe, 
    GenreFilter 
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
