import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MediaService } from '../core/medias.service';

@Component({
  selector: 'app-media-page',
  template: `
      {{data | json}}
    `
  })
export class MediaComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private mediaService:MediaService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.mediaService.get(+params.id).toPromise().then((data:any) => {
        this.data = data;
      })
    });
  }

}
