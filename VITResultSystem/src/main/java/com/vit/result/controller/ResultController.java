package com.vit.result.controller;

import com.vit.result.model.*;
import com.vit.result.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/results")
public class ResultController {

    @Autowired private StudentRepository studentRepo;
    @Autowired private MSERepository mseRepo;
    @Autowired private ESERepository eseRepo;

    @GetMapping("/{rollNumber}")
    public ResponseEntity<?> getSemesterResult(@PathVariable String rollNumber) {
        Student student = studentRepo.findByRollNumber(rollNumber);
        if (student == null) return ResponseEntity.notFound().build();

        List<MSE> mseList = mseRepo.findByStudentId(student.getId());
        List<ESE> eseList = eseRepo.findByStudentId(student.getId());

        Map<String, Double> finalMarks = new HashMap<>();
        for (MSE m : mseList) {
            for (ESE e : eseList) {
                if (m.getSubject().equals(e.getSubject())) {
                    double total = m.getMarks() * 0.3 + e.getMarks() * 0.7;
                    finalMarks.put(m.getSubject(), total);
                }
            }
        }

        return ResponseEntity.ok(Map.of("student", student, "result", finalMarks));
    }
}