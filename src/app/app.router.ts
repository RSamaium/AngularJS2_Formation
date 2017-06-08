import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  { path: 'login', component:  LoginComponent }
];

export const AppRouter = RouterModule.forRoot(routes);
