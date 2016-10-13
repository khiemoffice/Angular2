import { Component } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FormComponent {
<<<<<<< HEAD
    canFly=true;
    heroes:any[]=[
        {name:'aeflo', canFly:true}
    ];
    addHero(name: string){
        let hero={name, canFly: this.canFly}
        this.heroes.push(hero)
=======
    birthday = Date.now();
    get format(){
        return "MM/dd/yy";
>>>>>>> 48729db09e984db8adb102c306e06a073f6231ad
    }

   
}