
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
     <nav>
        <a routerLink="contact" routerLinkActive="active">Contact</a>
        <a routerLink="form"  routerLinkActive="active">Form</a>
        <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    <img src="../../public/images/angular.png">
    `
})

export class AppComponent {}