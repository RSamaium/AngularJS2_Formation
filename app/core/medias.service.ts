import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MediaService {

  url: string = 'https://jsonplaceholder.typicode.com/photos';
  params:string = '?_start=0&_end=10';


  constructor(private http:Http) {
  }

  query() {
      return this.http
                .get(this.url + this.params)
                .map((response:any) => response.json())
  }


}
