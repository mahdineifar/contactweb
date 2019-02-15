package com.example.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.example.entities.audit.UserDateAudit;

@Entity
public class Contact extends UserDateAudit {

	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	private String email;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String photo;
	private String prenom;
	private long tel;

	public Contact() {
		super();
	}

	public Contact(String nom, String prenom, Date dateNaissance, String email, long tel, String photo) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.email = email;
		this.tel = tel;
		this.photo = photo;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public String getEmail() {
		return email;
	}

	public Long getId() {
		return id;
	}

	public String getNom() {
		return nom;
	}

	public String getPhoto() {
		return photo;
	}

	public String getPrenom() {
		return prenom;
	}

	public long getTel() {
		return tel;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public void setTel(long tel) {
		this.tel = tel;
	}

}
