package com.example.payload;

public class JwtAuthenticationResponse {
	private String accessToken;
	private Long id;
	private String name;
	private String username;
	private String email;
	private String tokenType = "Bearer";

	public JwtAuthenticationResponse(String accessToken, Long id, String name, String username, String email) {
		this.accessToken = accessToken;
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
}
