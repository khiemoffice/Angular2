import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { routing } from './app.routing';


import { HomeComponent } from './home.component/home.component';
import { CreateUserComponent } from './createUserComponent/createUser.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule],
  declarations: [ AppComponent, HomeComponent, CreateUserComponent ],
  bootstrap:    [ AppComponent ],
  providers:[Http]
})
export class AppModule { }
