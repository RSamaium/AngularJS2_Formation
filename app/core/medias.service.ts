import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MediaService {

  url: string = 'https://jsonplaceholder.typicode.com/photos';
  params:string = '?_start=0&_end=10';
  headers:Headers = new Headers({
    'content-type': 'application/json'
  });

  constructor(private http:Http) {
  }

  query() {
      return this.http
                .get(this.url + this.params)
                .map((response:Response) => response.json())
  }

  create(data:any) {
    data = JSON.stringify(data);
    const options = new RequestOptions({headers: this.headers})
    return this.http.post(this.url, data, options)
                    .map(res => res.json())
  }

  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
