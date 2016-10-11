
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
     <nav>
        <a routerLink="contact" routerLinkActive="active">Contact</a>
        <a routerLink="form"  routerLinkActive="active">Form</a>
        <a routerLink="http"  routerLinkActive="active">Http</a>
      </nav>
      <router-outlet></router-outlet>
    <img src="../../public/images/angular.png">
    `
})

export class AppComponent {}