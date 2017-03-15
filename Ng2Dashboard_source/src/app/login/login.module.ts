import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { login_routing } from './login.routes';

@NgModule({
    imports: [CommonModule, login_routing],
    declarations: [LoginComponent],
    exports: [RouterModule, LoginComponent]
})

export class LoginModule { }