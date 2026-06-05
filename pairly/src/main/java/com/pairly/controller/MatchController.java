package com.pairly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MatchController {

    @GetMapping("/matches")
    public String home(Model model) {

        model.addAttribute("title", "Matches Page");

        return "matches";
    }
}