import { Component } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FormComponent {
    canFly=true;
    heroes:any[]=[
        {name:'aeflo', canFly:true}
    ];
    addHero(name: string){
        let hero={name, canFly: this.canFly}
        this.heroes.push(hero)
    }

   
}