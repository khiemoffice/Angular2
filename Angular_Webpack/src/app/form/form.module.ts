import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent }   from './form.component';

import { routing } from './form.routing';
<<<<<<< HEAD
import { FormHighlightComponent } from './formhighlight.directive';
import { canFlyPipe } from './expo.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [FormComponent, FormHighlightComponent, canFlyPipe],
=======
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, routing],
    declarations: [FormComponent],
>>>>>>> 48729db09e984db8adb102c306e06a073f6231ad
    providers: [],
})


export class FormModule { }
