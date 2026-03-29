package com.diary.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.diary.model.DiaryEntry;
import java.util.List;

public interface DiaryEntryRepository extends JpaRepository<DiaryEntry, Long> {

    List<DiaryEntry> findByUserId(Long userId);
}