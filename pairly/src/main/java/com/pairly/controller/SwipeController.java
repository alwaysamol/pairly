package com.pairly.controller;

import com.pairly.entity.Match;
import com.pairly.repository.MatchRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SwipeController {

    @Autowired
    private MatchRepository matchRepository;

    // LEFT SWIPE
    @PostMapping("/swipe/left")
    public String swipeLeft() {

        Match match = new Match();

        match.setUser1Id(1L);
        match.setUser2Id(2L);
        match.setMatched(false);

        matchRepository.save(match);

        return "redirect:/";
    }

    // RIGHT SWIPE
    @PostMapping("/swipe/right")
    public String swipeRight() {

        Match match = new Match();

        match.setUser1Id(1L);
        match.setUser2Id(2L);
        match.setMatched(true);

        matchRepository.save(match);

        return "redirect:/";
    }
}