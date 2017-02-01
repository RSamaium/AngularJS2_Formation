import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaService } from '../../core/medias.service';

@Component({
  selector: 'app-card',
  templateUrl: 'app/home/card/card.component.html'
})
export class CardComponent implements OnInit {

  @Input() media:any;
  @Output() onDelete:EventEmitter<any> = new EventEmitter();

  constructor(private mediaService:MediaService) { }

  ngOnInit() {
  }

  deleteMedia(id:number) {
    this.mediaService.delete(id).subscribe(() => {
      this.onDelete.emit();
    })
  }

}
