import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpComponent } from './http.component';

const http_routes: Routes = [
  { path: 'http', component: HttpComponent },
];
export const http_routings: ModuleWithProviders = RouterModule.forChild(http_routes);

