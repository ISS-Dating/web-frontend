import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {SearchComponent} from './components/search/search.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: 'login'}
];

export const appRoutingModule = RouterModule.forRoot(routes);
