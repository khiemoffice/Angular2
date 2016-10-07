import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './feature.component.html'
})
export class FormComponent {
    birthday = Date.now();
    get format(){
        return "MM/dd/yy";
    }

   
}