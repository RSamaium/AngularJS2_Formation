import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';

const routes:Routes = [
  { path: '', component:  ContentComponent},
  { path: 'login', component:  LoginComponent}
];

export const AppRouter = RouterModule.forRoot(routes);
