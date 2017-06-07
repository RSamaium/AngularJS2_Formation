import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genre: string): string {
      switch(genre) {
        case 'fict':
          return 'Fiction'
        case 'anim':
            return 'Animation'
        case 'dram':
          return 'Drame'
        default:
          return genre
      }
  }

}

@Pipe({
  name: 'genreFilter'
})
export class GenreFilter implements PipeTransform {

  transform(value: any[], genreName: string): any[] {
    if (!genreName || genreName == 'all') {
      return value
    }
    return value.filter(media => media.genre == genreName)
  }

}
