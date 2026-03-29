package com.diary.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.diary.model.DiaryEntry;
import com.diary.repository.DiaryEntryRepository;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/diary")
@CrossOrigin(origins = "*")
public class DiaryController {

    @Autowired
    private DiaryEntryRepository diaryRepository;

    @PostMapping("/create")
    public DiaryEntry createEntry(@RequestBody DiaryEntry entry) {

        entry.setCreatedAt(LocalDateTime.now());
        return diaryRepository.save(entry);
    }
    @PutMapping("/update/{id}")
    public DiaryEntry updateEntry(@PathVariable Long id, @RequestBody DiaryEntry updatedEntry) {

        DiaryEntry entry = diaryRepository.findById(id).orElse(null);

        if(entry != null){
            entry.setTitle(updatedEntry.getTitle());
            entry.setContent(updatedEntry.getContent());
            return diaryRepository.save(entry);
        }

        return null;
    }
    @DeleteMapping("/delete/{id}")
    public String deleteEntry(@PathVariable Long id){

        diaryRepository.deleteById(id);

        return "Entry deleted";
    }
    @GetMapping("/entries/{userId}")
    public List<DiaryEntry> getEntries(@PathVariable Long userId) {

        return diaryRepository.findByUserId(userId);
    }

    @GetMapping("/entry/{id}")
    public DiaryEntry getEntry(@PathVariable Long id) {

        return diaryRepository.findById(id).orElse(null);
    }
}