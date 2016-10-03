import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//  App Root
import {AppComponent}  from './app.component';
import {UserService } from './user.service';
/* Contact Imports */
import{ ContactModule }      from './contact/contact.module';
import{ FormModule }      from './form/form.module';
import { routings }            from './app.routing';

@NgModule({
    imports:        [BrowserModule, ContactModule, FormModule, routings],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent],
    providers:      [UserService]
})

export class AppModule {}