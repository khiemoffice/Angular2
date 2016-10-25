import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '.sidebar-toggle'
})
export class SidebarToggleDirective {

    // Check if element has class
     hasClass(target:any, elementClassName:string) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }

    // Toggle element class
     toggleClass(elem:any, elementClassName:string) {
        let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
                newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + elementClassName;
        }
    }

    @HostListener('mouseover', ['$event'])
    toggleOpen($event?:any) {
        $event&&$event.preventDefault();
        this.toggleClass(document.querySelector('body'), 'sidebar-nav');
    }

    @HostListener('mouseout', ['$event'])
    toggleClose($event?:any) {
        $event&&$event.preventDefault();
        this.toggleClass(document.querySelector('body'), 'sidebar-nav');

    }
}

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
