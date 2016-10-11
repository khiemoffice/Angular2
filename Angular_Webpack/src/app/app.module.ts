import {NgModule}        from '@angular/core';
import {BrowserModule}   from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
//  App Root
import {AppComponent}    from './app.component';
import {UserService }    from './user.service';
/* Contact Imports */
import{ ContactModule }  from './contact/contact.module';
import{ FormModule }     from './form/form.module';
import { routings }      from './app.routing';

import { HttpClientModule } from './http/http.module';

@NgModule({
    imports:        [BrowserModule,HttpModule, ContactModule, FormModule, HttpClientModule, routings],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent],
    providers:      [UserService]
})

export class AppModule {}