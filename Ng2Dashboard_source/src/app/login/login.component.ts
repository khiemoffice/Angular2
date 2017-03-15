import { Component, trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent {

  constructor(private router: Router, private _http: Http) { }

  onLogin(){
     setTimeout(()=> {
        this.router.navigate(['dashboard'])
      },1)
    
       return false;
  }


}
