import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-media-page',
  template: `
      {{id}}
    `
  })
export class MediaComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

}
