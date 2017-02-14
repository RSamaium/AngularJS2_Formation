import { Component, OnInit, Input } from '@angular/core';
import { MediaService } from '../../core/medias.service';

@Component({
  selector: 'app-card',
  templateUrl: 'app/home/card/card.component.html'
})
export class CardComponent implements OnInit {

  @Input() media:any;

  constructor(private mediaService:MediaService) { }

  ngOnInit() {
  }



}
