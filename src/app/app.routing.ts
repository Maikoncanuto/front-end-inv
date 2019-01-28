import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const APP_ROUTE: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'propostas',
    loadChildren: './propostas/propostas.module#PropostasModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
