import { Component, OnInit } from '@angular/core';
import { Router }                       from '@angular/router';
import { SidebarToggleDirective }      from '../shared/sidebar.directive';
import { SidebarToggleClickDirective } from '../shared/sidebar.clicktoggle.directive';


@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
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
