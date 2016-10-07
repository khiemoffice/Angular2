import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch:'full'},
  { path: 'form', loadChildren: 'form/form.module#FormModule' }
  
];


export const routings: ModuleWithProviders = RouterModule.forRoot(routes);