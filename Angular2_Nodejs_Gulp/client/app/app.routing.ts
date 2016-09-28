
import { NgModule , ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component/home.component';
import { CreateUserComponent } from './createUserComponent/createUser.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-user', component: CreateUserComponent },
];

export var routing:ModuleWithProviders = RouterModule.forRoot(routes)