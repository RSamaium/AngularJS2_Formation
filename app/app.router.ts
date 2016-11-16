import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MediaComponent} from './media/media.component';
import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component:  MainComponent,
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
  { path: 'login', component:  LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
