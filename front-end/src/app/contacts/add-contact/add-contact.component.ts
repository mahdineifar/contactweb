import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  contact: Contact;
  addForm=new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    dateNaissance: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
  }

  );
  constructor(private contactService: ContactService, public router:Router) { }

  onSubmit(){
    this.contact=this.addForm.value;
    this.contactService.addContact(this.contact)
    .subscribe(data=>this.router.navigate(['/contacts']), err=>console.log(err));
  }

  ngOnInit() {
  }

}
