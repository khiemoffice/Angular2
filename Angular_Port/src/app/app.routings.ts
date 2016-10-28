import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';

// Main view
import { DashboardComponent }       from './dashboard/dashboard.component';

// Components
import { ButtonsComponent }         from './components/buttons.component';
import { TablesComponent }         from './components/tables.component';

import { LoginComponent } from './login/index';

const routes: Routes = [
      { path: '',
        component: LoginComponent
      },
      {
        path: '',
        component: FullLayoutComponent,
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