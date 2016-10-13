import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HeroService  } from './hero.service';

@Component({
   
    selector: 'http-component',
    templateUrl: './http.component.html'
})
export class HttpComponent implements OnInit {
    heroes:any[];
    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHero().subscribe(
            res =>{ this.heroes =res},
            err => console.log(err)
        )
    }

    addHero(name:any){
       
         this.heroService.addHero(name).subscribe(
              hero  => this.heroes.push(hero),
               error =>  console.log(error)
         );
    }
=======

@Component({
    selector: './http-component',
    templateUrl: './http.component.html'
})
export class HttpComponent{
    constructor() { }

    ngOnInit() { }
>>>>>>> 48729db09e984db8adb102c306e06a073f6231ad
}