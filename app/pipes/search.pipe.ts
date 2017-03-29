import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(medias:any[], str:string) {
    const regexp = new RegExp(str);
    return medias.filter(item => regexp.test(item.title));
  }

}
