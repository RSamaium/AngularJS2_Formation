import {RouterModule, Routes} from '@angular/router';
import {MediaComponent} from '../media/media.component';
import {ContentComponent} from './content.component';
import {HomeComponent} from '../home/home.component';

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

export const ContentRouting = RouterModule.forChild(routes);
