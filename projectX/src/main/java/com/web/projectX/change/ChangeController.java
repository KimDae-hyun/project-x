package com.web.projectX.change;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ChangeController {
    @GetMapping ("/change")
    public String change() {
        return "change";
    }
}
