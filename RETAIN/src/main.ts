
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { MainComponent } from './app/container';
@NgModule({
    declarations:[AppComponent, MainComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
