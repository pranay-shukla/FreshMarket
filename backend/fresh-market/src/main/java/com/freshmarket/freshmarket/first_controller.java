package com.freshmarket.freshmarket;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class first_controller {
    @GetMapping("/welcome")
    public String first_api(){
        return "welcome to my first project";
    }
    
}
