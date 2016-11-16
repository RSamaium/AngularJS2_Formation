import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { routing } from '../app.router';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [MediaComponent],
  exports: [MediaComponent]
})
export class MediaModule { }
