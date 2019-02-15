import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http: HttpClient) { }

  getAll(page: number, size:number){
    return this.http.get<Contact[]>("http://localhost:8081/chercherContacts?page="+page+"&size="+size);
  }

  addContact(contact: Contact){
    return this.http.post<Contact>("http://localhost:8081/contacts",contact);
  }

  getContact(id: number){
    return this.http.get<Contact>("http://localhost:8081/contact/"+id);
  }

  updateContact(id: number, contact:Contact){
    return this.http.put<Contact>("http://localhost:8081/contact/"+id,contact);
  }

  deleteContact(id: number){
    return this.http.delete("http://localhost:8081/contact/"+id)
  }

}
