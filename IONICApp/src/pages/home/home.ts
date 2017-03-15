import { Component } from '@angular/core';
import { ContentTab1} from '../content-tab1/content-tab1';
import { ContentTab2} from '../content-tab2/content-tab2';
import { ContentTab3} from '../content-tab3/content-tab3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1:any;
  tab2:any;
  tab3:any;
  constructor() {
    this.tab1 = ContentTab1;
    this.tab2 = ContentTab2;
    this.tab3 = ContentTab3;
  }
  

}
