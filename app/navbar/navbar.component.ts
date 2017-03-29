import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MediaService } from '../core/medias.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'app/navbar/navbar.component.html'
})
export class NavbarComponent implements OnInit {

  form:FormGroup;
  search:FormControl;

  constructor(private builder:FormBuilder, private mediaService:MediaService) { }

  ngOnInit() {
    this.search = new FormControl('', []);
    this.mediaService.search = this.search
      .valueChanges
      .debounceTime(1000)
      .distinctUntilChanged();
    this.form = this.builder.group({
      search: this.search
    });
  }

}
