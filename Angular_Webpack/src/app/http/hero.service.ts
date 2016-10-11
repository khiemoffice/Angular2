import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
    private heroUrl = './src/app/heroes.json';

    constructor(private http: Http){

    }
    getHero():Observable<any>{
       return this.http.get(this.heroUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response){
        let body =res.json()
        return body.data || {"name":"fewfew def"}
    }

    private handleError(error:any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg); // log to console instead
          return Observable.throw(errMsg);
    }

    addHero(name:string):Observable <any>{
        let body     =  JSON.stringify({name});
        let headers  =  new Headers({ 'Content-Type': 'application/json'});
        //let options  =  new RequestOptions({ headers: headers});
        alert('fwef');
        return this.http.post(this.heroUrl, body)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
}