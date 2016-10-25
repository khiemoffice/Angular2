import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule }                 from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FullLayoutComponent } from './layouts/full-layout.component';

import { ButtonsComponent }         from './components/buttons.component';
import { SidebarToggleDirective } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';



import { LoginComponent } from './login/login.component';

// Charts
import { ChartsComponent }              from './charts/charts.component';

// Material Design

import { routing } from './app.routings';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FullLayoutComponent,
    SidebarToggleDirective,
    AsideToggleDirective,
    ChartsComponent,
    ButtonsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Ng2BootstrapModule ,
    ChartsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

