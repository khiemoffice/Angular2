
import { NgModule , ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export var routing:ModuleWithProviders = RouterModule.forRoot(routes)