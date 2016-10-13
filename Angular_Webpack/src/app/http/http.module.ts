import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======

import { http_routings } from './http.routing';
import { HttpComponent } from './http.component';

@NgModule({
    imports: [http_routings],
    exports: [],
    declarations: [HttpComponent],
    providers: [],
})
export class HttpModule { }
>>>>>>> 48729db09e984db8adb102c306e06a073f6231ad
