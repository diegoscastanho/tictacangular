import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { SingleplayerboardComponent } from './singleplayerboard/singleplayerboard.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'singleboard', component: SingleplayerboardComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

export { appRoutes };