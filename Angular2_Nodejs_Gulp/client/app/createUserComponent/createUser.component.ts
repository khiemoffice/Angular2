import { Component, OnInit, Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
@Component({
	moduleId: module.id,
	selector: 'create-user',
	templateUrl: 'create_user.html'
})
export class CreateUserComponent {
	constructor(private  _http: Http) {}
 	onSubmit() { 
		 var body={
			 name: 'fewf',
			 password:'fewfwe',
			 email: 'fwefwe'
		 }
		
		 this._http.post('http://localhost:3000/create-user',body,{})
		}
}