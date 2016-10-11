import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpComponent } from './http.component';

const routes: Routes = [
  { path: 'http', component: HttpComponent },
];

export const http_routing: ModuleWithProviders = RouterModule.forChild(routes);