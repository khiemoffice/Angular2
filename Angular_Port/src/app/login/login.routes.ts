import { Route, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './index';

export const LoginRoutes: Routes =[
    {
        path: '',
        component: LoginComponent
    }
]

export const login_routing = RouterModule.forChild(LoginRoutes);
