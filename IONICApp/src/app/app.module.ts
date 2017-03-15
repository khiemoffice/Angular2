import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {AuthService} from '../providers/auth-service';

import { ContentTab1} from '../pages/content-tab1/content-tab1';
import { ContentTab2} from '../pages/content-tab2/content-tab2';
import { ContentTab3} from '../pages/content-tab3/content-tab3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContentTab1,
    ContentTab2,
    ContentTab3
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContentTab1,
    ContentTab2,
    ContentTab3
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
