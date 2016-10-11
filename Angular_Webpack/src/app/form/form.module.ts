import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent }   from './form.component';

import { routing } from './form.routing';
import { FormHighlightComponent } from './formhighlight.directive';
import { canFlyPipe } from './expo.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [FormComponent, FormHighlightComponent, canFlyPipe],
    providers: [],
})


export class FormModule { }
