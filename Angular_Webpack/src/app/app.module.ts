import {NgModule}        from '@angular/core';
import {BrowserModule}   from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
//  App Root
import {AppComponent}    from './app.component';
import {UserService }    from './user.service';
/* Contact Imports */
<<<<<<< HEAD
import{ ContactModule }  from './contact/contact.module';
import{ FormModule }     from './form/form.module';
import { routings }      from './app.routing';

import { HttpClientModule } from './http/http.module';

@NgModule({
    imports:        [BrowserModule,HttpModule, ContactModule, FormModule, HttpClientModule, routings],
=======
import{ ContactModule }      from './contact/contact.module';
import{ FormModule }      from './form/form.module';
import { routings }            from './app.routing';
/* Http Imports */
import { HttpModule } from './http/http.module';

@NgModule({
    imports:        [BrowserModule, ContactModule, FormModule, HttpModule, routings],
>>>>>>> 48729db09e984db8adb102c306e06a073f6231ad
    declarations:   [AppComponent],
    bootstrap:      [AppComponent],
    providers:      [UserService]
})

export class AppModule {}