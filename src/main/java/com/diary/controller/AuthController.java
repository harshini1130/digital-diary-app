package com.diary.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.diary.model.User;
import com.diary.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        User existing = userRepository.findByUsername(user.getUsername());

        if(existing != null && existing.getPassword().equals(user.getPassword())) {
            return existing;
        }

        return null;
    }
}