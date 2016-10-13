import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '.nav-dropdown'
})
export class NavDropdownDirective{
    @HostBinding('class.open')  _open = false;
    toggleOpen(){
        if(this._open==false){
            this._open=true
        }else{
            this._open=false
        }
            ;
    }
}

@Directive({
    selector: '.nav-dropdown-toggle',
})
export class NavDropdownToggleDirective{

    constructor(private dropdown: NavDropdownDirective){}

    @HostListener('click',  ['$event'])
    onClick($event:any){
        $event.preventDefault();
       
        this.dropdown.toggleOpen();
    }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];