import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';

// Main view
import { DashboardComponent }       from './dashboard/dashboard.component';

// Components
import { ButtonsComponent }         from './components/buttons.component';
import { TablesComponent }         from './components/tables.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
      {
        path: '',
        loadChildren: './layouts/full-layout.component',
        children: [
           {
             path: 'dashboard',
             component: DashboardComponent,
           },
           {
                path: 'components',
                redirectTo: 'components/buttons',
                pathMatch: 'full',
           },
           {
                path: 'components',
                children: [
                    {
                        path: 'buttons',
                        component: ButtonsComponent   
                    },
                    {
                        path: 'tables',
                        component: TablesComponent,
                        data: {
                            title: 'Tables'
                        }
                    }
                ]
            }
        ]

      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)