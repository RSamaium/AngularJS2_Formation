import { Component, OnInit} from '@angular/core';
import { MediaService } from '../../core/media.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  valueFilter:string = 'all'
  genres: any[]
  medias: any[] = []

  constructor(private mediaService:MediaService) {

  }

  ngOnInit() {
    this.medias = this.mediaService.query();
  }

}
