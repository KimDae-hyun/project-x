package com.web.projectX.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")//uri
    public String main() {
        return "main";//파일경로. yml파일에서 접두사 접미사 적용
    }
}
