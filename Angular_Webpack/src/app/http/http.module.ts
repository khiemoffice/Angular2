import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpComponent }   from './http.component';
import { http_routing } from './http.routings';
import { HeroService } from './hero.service';

@NgModule({
    imports: [CommonModule, http_routing],
    exports: [],
    declarations: [HttpComponent],
    providers: [HeroService],
})
export class HttpClientModule { }
