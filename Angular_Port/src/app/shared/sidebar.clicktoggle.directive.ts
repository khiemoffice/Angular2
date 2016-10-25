import { Directive, HostListener } from '@angular/core';
import {  SidebarToggleDirective} from './sidebar.directive';

@Directive({
    selector:'.sidebar-clicktoggle'
})
export class SidebarToggleClickDirective{
    constructor(private _sidebartoggle: SidebarToggleDirective){
   
    }
    @HostListener('click', ['$event'])
    toggleClickOpen($event?:any) {
       $event&&$event.preventDefault();
      
        this._sidebartoggle.toggleClass(document.querySelector('body'), 'sidebar-nav');
    }
}