import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contact: Contact;
  addForm= new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    dateNaissance: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
 });

  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactService, private fb: FormBuilder,
    public router: Router) {
    this.contactService.getContact(this.activatedRoute.snapshot.params['id'])
    .subscribe((data)=>this.contact=data,
    (error) => {
      console.log(error);
    },
    () => {
      console.log(this.contact);
      this.createForm(this.contact);
    });
    
   }

   createForm(contact: Contact) {
    this.addForm.setValue({
      nom: contact.nom,
      prenom: contact.prenom,
      email: contact.email,
      tel: contact.tel,
      dateNaissance: contact.dateNaissance
    })
  }

  update(){
    this.contactService.updateContact(this.activatedRoute.snapshot.params['id'], this.addForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/contacts']);
    });
  }

  ngOnInit() {  }

}
