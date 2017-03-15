import { Component, OnInit } from '@angular/core';
import { Router }                       from '@angular/router';
import { SidebarToggleDirective , SidebarToggleClickDirective}      from '../shared/sidebar.directive';
import { routerTransition } from '../router.animations';


@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class FullLayoutComponent{
    constructor( private router: Router, public sidebar_toggle:SidebarToggleDirective ) { }

    public status:{isopen:boolean} = {isopen: false};

    public addToggleClass:boolean = false;

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngAfterViewInit(): void {
      var _this=this;
      setTimeout(function(){
          _this.sidebar_toggle.toggleOpen();
      },1000)
      
    }
}
