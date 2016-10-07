import { NgModule } from '@angular/core';

import { http_routings } from './http.routing';
import { HttpComponent } from './http.component';

@NgModule({
    imports: [http_routings],
    exports: [],
    declarations: [HttpComponent],
    providers: [],
})
export class HttpModule { }
