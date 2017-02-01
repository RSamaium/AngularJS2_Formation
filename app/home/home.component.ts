import { Component, OnInit} from '@angular/core';
import { MediaService } from '../core/medias.service';
import { GenreService } from '../core/genre.service';

@Component({
  selector: 'app-home',
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {

  valueFilter:string = 'all';

  genres: any[];
  medias: any[];

  constructor(private mediaService:MediaService, private genreService:GenreService) {

  }

  ngOnInit() {
    this.mediaService.query().then((obj:any[]) => {
      this.medias= obj;
    });
    this.genres = this.genreService.query();
  }

  createMedia() {
    this.mediaService.create({
      title: 'hello'
    }).subscribe((media:any) => {
      this.medias.push(media)
    })
  }

  onDeleteMedia(index:number) {
    this.medias.splice(index, 1);
  }

}
