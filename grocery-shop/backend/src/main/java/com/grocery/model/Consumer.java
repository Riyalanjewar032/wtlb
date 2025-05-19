package com.grocery.model;

import jakarta.persistence.*;

@Entity
public class Consumer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String password;

    // Getters and Setters
}