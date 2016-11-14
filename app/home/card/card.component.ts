import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: 'app/home/card/card.component.html'
})
export class CardComponent implements OnInit {

  @Input() media:any;

  constructor() { }

  ngOnInit() {
  }

}
