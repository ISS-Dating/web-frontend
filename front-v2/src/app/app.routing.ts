import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {SearchComponent} from './components/search/search.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ChatComponent} from './components/chat/chat.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [

  {path: 'qdate/login', component: LoginComponent},
  {path: 'qdate/search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'qdate/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'qdate/chat', component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'qdate/register', component: RegisterComponent},
  {path: '**', redirectTo: 'qdate/login'}
];

export const appRoutingModule = RouterModule.forRoot(routes);
