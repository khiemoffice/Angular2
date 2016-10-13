import { Component, OnInit }      from '@angular/core';
import { TODO, ContactService } from './contact.service';
import { UserService }    from '../user.service';

@Component({
    
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  todo: TODO;
  TODOs: TODO[];
  msg = 'Loading contacts ...';
  userName = '';

  constructor(private contactService: ContactService, private  userService: UserService) {
    
  }
  
 
  ngOnInit() {
     this.contactService.getContacts()
      .map(res=>res.json())
      .subscribe(
        alo => {console.log(alo)},
        err => console.log(err)
      );
  }
 
  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
