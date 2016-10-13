import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AwesomePipe }        from './awesome.pipe';
import
       { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { HighlightDirective } from './highlight.directive';
import { routing } from './contact.routing';

@NgModule({
  imports:      [ CommonModule, FormsModule, HttpModule, routing ],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  providers:    [ ContactService ] 
})
export class ContactModule { }