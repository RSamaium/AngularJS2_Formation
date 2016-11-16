import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MediaService {

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) {
  }

  query() {
      return this.http
        .get(this.url)
        .map((response:Response) => response.json())
  }

}
