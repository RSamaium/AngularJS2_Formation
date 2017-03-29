import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class MediaService {

  url: string = 'https://jsonplaceholder.typicode.com/photos';
  params:string = '?_start=0&_end=10';
  headers:Headers = new Headers({
    token: 'secret-token',
    'content-type': 'application/json'
  });
  _search:Observable<string>;

  constructor(private http:Http) {
  }

  query() {
      /*return this.http
        .get(this.url)
        .map((response:Response) => response.json())
        */
      /*return new Promise((resolv, reject) => {
            this.http .get(this.url)
                      .map((response:Response) => response.json())
                      .subscribe(resolv, reject)
      })*/
      return this.http
                .get(this.url + this.params)
                .map((response:Response) => response.json())
                .toPromise();
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

  get search() {
    return this._search;
  }

  set search(observable:Observable<string>) {
    this._search = observable;
  }

}
