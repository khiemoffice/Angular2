import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private _http: Http) { }

  onLogin( username, password){
      //event.preventDefault();
      let body = JSON.stringify({ username, password });
      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this._http.post('/', body,{ headers: contentHeaders }).subscribe(
        res   => {this.router.navigate(['/dashboard']); },
        error => { alert(error.text())}
      )
  }


}
