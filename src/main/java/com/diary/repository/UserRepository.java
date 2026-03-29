package com.diary.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.diary.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}