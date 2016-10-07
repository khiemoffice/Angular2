import { NgModule } from '@angular/core';

import { FormComponent }   from './form.component';
import { routing } from './form.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, routing],
    declarations: [FormComponent],
    providers: [],
})


export class FormModule { }
