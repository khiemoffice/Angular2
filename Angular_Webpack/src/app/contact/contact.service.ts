import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class TODO {
  constructor(public text: string, public IsCompleted: boolean) { }
}

@Injectable()
export class ContactService {
    constructor(private http:Http){
      
    }
    getContacts() {
      return this.http.get('./contact')
    }
    getContact(id: number | string) {
      
    }
}
