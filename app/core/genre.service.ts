import {Injectable} from '@angular/core';

@Injectable()
export class GenreService {

  query() {
    return ["fict", "anim", "sport", "dram"];
  }

}
