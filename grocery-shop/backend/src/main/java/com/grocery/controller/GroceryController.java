package com.grocery.controller;

import com.grocery.model.Consumer;
import com.grocery.model.Item;
import com.grocery.repository.ConsumerRepository;
import com.grocery.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class GroceryController {

    @Autowired
    private ConsumerRepository consumerRepo;

    @Autowired
    private ItemRepository itemRepo;

    @PostMapping("/register")
    public Consumer register(@RequestBody Consumer consumer) {
        return consumerRepo.save(consumer);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> data) {
        Consumer user = consumerRepo.findByEmail(data.get("email"));
        if (user != null && user.getPassword().equals(data.get("password"))) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @GetMapping("/items")
    public List<Item> getItems() {
        return itemRepo.findAll();
    }
}