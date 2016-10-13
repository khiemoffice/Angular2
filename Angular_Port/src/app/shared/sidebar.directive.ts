import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '.sidebar-toggle'
})
export class SidebarToggleDirective {

     
    //Check if element has class
    private hasClass(target:any, elementClassName:string) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }

    //Toggle element class
    private toggleClass(elem:any, elementClassName:string) {
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

    @HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();

        let bodyClass = localStorage.getItem('body-class');

        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
            this.toggleClass(document.querySelector('html'), 'sidebar-opened');
        } else if (this.hasClass(document.querySelector('body'), 'sidebar-nav') || bodyClass == 'sidebar-nav') {
            this.toggleClass(document.querySelector('body'), 'sidebar-nav');
            localStorage.setItem('body-class', 'sidebar-nav');
            if (bodyClass == 'sidebar-nav') {
                localStorage.clear();
            }
        }
    }
}