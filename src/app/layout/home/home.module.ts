import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component'
import { CardComponent } from './card/card.component'

import { GenrePipe, GenreFilter } from './card/genre.pipe'
import { LayoutRouter } from '../layout.router'

import { ConfirmDirective } from 'app/shared/directives/confirm.directive'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutRouter
  ],
  declarations: [ 
    HomeComponent, 
    CardComponent,
    GenrePipe, 
    GenreFilter,
    ConfirmDirective
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
