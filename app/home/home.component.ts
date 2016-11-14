import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {

  medias: any[] = [
  {
    "albumId": 1,
    "id": 1,
    "genre": "fict",
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/30ac17"
  },
  {
    "albumId": 1,
    "id": 2,
    "genre": "fict",
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/dff9f6"
  },
  {
    "albumId": 1,
    "id": 3,
    "genre": "anim",
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/1941e9"
  },
  {
    "albumId": 1,
    "id": 4,
    "genre": "anim",
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "http://placehold.it/600/d32776",
    "thumbnailUrl": "http://placehold.it/150/39e985"
  },
  {
    "albumId": 1,
    "id": 5,
    "genre": "sport",
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "http://placehold.it/600/f66b97",
    "thumbnailUrl": "http://placehold.it/150/7735a"
  },
  {
    "albumId": 1,
    "id": 6,
    "genre": "dram",
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "http://placehold.it/600/56a8c2",
    "thumbnailUrl": "http://placehold.it/150/c672a0"
  }];

  constructor() {

  }



}
