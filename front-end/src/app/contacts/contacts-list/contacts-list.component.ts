import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from 'src/app/model/contact';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  //ELEMENT_DATA: Contact[];
  displayedColumns: string[];
  dataSource: Contact[];
  
  size: number = 5;
  length: number;
  pageIndex: number = 0;
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public contactService:ContactService, public router: Router) {
    this.getAll(this.pageIndex, this.size);
   }

   getAll(page, size) {
     
    this.contactService.getAll(page, size)
    .subscribe(data=>{
      this.displayedColumns = ['id', 'nom', 'prenom', 'dateNaissance', 'email', 'tel', 'action'];
      //this.dataSource = data;
      this.dataSource = data['content'];
      
      this.size = data['size'];
      this.length = data['totalElements'];
    }, err=>console.log(err));
   }

   edit(id: number){
     this.router.navigate(['/edit-contact/'+id]);
   }

   delete(id: number, i: number){

     this.contactService.deleteContact(id)
     .subscribe(()=>{
      this.dataSource.splice(i,1);
      this.dataSource=JSON.parse(JSON.stringify(this.dataSource));

     });
   }

   onPaginationChange(event){
     this.getAll(event.pageIndex, event.pageSize);
   }

  ngOnInit() {
  }

}
