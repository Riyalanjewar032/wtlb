package com.vit.result.repository;

import com.vit.result.model.ESE;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ESERepository extends JpaRepository<ESE, Long> {
    List<ESE> findByStudentId(Long studentId);
}