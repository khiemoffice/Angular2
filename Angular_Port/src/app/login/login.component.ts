import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private _http: Http) { }

  onLogin( username, password){

      this.router.navigate(['dashboard']);
      return false;
      /*
      let body = JSON.stringify({ username, password });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this._http.post('/', {username, password}, options).subscribe(
        res   => {this.router.navigate(['/dashboard']); },
        error => { alert(error.text())}
      )*/
  }


}
