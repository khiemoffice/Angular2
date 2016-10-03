import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch:'full'},
  { path: 'form', loadChildren: 'form/form.module#FormModule' },
  { path: 'heroes', loadChildren: 'http/http.module#HeroModule' }
];


export const routings: ModuleWithProviders = RouterModule.forRoot(routes);