import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

export { appRoutes };