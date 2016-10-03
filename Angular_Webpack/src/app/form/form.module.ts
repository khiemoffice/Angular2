import { NgModule } from '@angular/core';

import { FormComponent }   from './form.component';
import { routing } from './form.routing';

@NgModule({
    imports: [routing],
    declarations: [FormComponent],
    providers: [],
})


export class FormModule { }
