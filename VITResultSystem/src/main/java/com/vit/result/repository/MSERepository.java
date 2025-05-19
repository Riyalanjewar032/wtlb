package com.vit.result.repository;

import com.vit.result.model.MSE;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MSERepository extends JpaRepository<MSE, Long> {
    List<MSE> findByStudentId(Long studentId);
}