import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactHttpService} from './contact-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*
    this.contacts = [];
    this.contacts.push(new Contact(1,'Sami', 'Anttonen'));
    this.contacts.push(new Contact(2, 'Joku', 'Toinen'));
    this.contacts.push(new Contact(3, 'Erkki', 'Eräs'));
    */
  }

  /*
    getContacts(): Contact[] {
      return this.contacts;
    }
  */

  getContact(): Observable<Contact[]> {
    return this.contactHttpService.getHttp();
  }
}
