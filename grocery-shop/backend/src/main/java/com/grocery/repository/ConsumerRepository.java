package com.grocery.repository;

import com.grocery.model.Consumer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsumerRepository extends JpaRepository<Consumer, Long> {
    Consumer findByEmail(String email);
}