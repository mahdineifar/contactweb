package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.UserRepository;
import com.example.entities.User;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping(value = "/users")
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@GetMapping(value = "/user/{id}")
	public User getUserById(@PathVariable Long id) {
		return userRepository.findById(id).get();
	}

}
