package com.grocery.model;

import jakarta.persistence.*;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private String imageUrl;

    // Getters and Setters
}