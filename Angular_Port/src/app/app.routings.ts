import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';

// Main view
import { DashboardComponent }       from './dashboard/dashboard.component';

//Components
import { ButtonsComponent }         from './components/buttons.component';



const routes: Routes = [
      { path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
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
                        
                    }
                ]
            }
        ]

      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)