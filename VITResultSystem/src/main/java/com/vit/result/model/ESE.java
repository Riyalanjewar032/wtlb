package com.vit.result.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ESE {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long studentId;
    private String subject;
    private int marks;
}