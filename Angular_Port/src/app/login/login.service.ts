import { Injectable } from '@angular/core';
import {  Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    //event.preventDefault();
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private _http: Http) { }
    authenticate({user, pass}){
        return this._http.post('/', JSON.stringify({user, pass}), this.options)
    }
}