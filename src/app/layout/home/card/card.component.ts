import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaService } from '../../../core/media.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() media: any
  @Output() onDelete: EventEmitter<any> = new EventEmitter()

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  deleteMedia(bool:boolean) {
    if (!bool) return
    this.mediaService.delete(this.media.id).subscribe(() => {
      this.onDelete.emit()
    })
  }

}
