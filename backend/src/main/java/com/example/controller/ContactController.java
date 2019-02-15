package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.ContactRepository;
import com.example.entities.Contact;

@RestController
@CrossOrigin("*")
public class ContactController {
	
	@Autowired
	private ContactRepository contactRepository;
	
	@GetMapping(value="/contacts")
	public List<Contact> getContacts(){
		return contactRepository.findAll();
	}
	
	@GetMapping(value="/contact/{id}")
	public Contact getContact(@PathVariable Long id){
		return contactRepository.findById(id).get();
	}
	
	@PostMapping(value="/contacts")
	public Contact save(@RequestBody Contact contact){
		return contactRepository.save(contact);
	}
	
	@DeleteMapping(value="/contact/{id}")
	public void delete(@PathVariable Long id){
		contactRepository.delete(contactRepository.getOne(id));
	}
	
	@PutMapping(value="/contact/{id}")
	public Contact edit(@PathVariable Long id, @RequestBody Contact contact){
		contact.setId(id);
		return contactRepository.saveAndFlush(contact);
	}
	
	@GetMapping(value="/chercherContacts")
	public Page<Contact> chercher(
			@RequestParam(name="mc", defaultValue="") String mc,
			@RequestParam(name="page", defaultValue="0") int page,
			@RequestParam(name="size", defaultValue="5") int size){
		return contactRepository.chercher("%"+mc+"%", PageRequest.of(page, size));
	}

}
