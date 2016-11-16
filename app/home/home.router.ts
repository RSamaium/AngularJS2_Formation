import {RouterModule, Routes} from '@angular/router';
import {MediaComponent} from '../media/media.component';
import {ContentComponent} from '../content/content.component';
import {HomeComponent} from './home.component';

const routes:Routes = [
  {
    path: '',
    component:  ContentComponent,
    children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'media/:id',
            component: MediaComponent
          }
      ]
  },
];

export const HomeRouting = RouterModule.forChild(routes);
