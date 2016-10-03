import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
