import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {ModuleWithProviders} from '@angular/core';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dash'},
  {path: 'dash', component: MainDashboardComponent},
  {path: 'contact', component: ContactComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
