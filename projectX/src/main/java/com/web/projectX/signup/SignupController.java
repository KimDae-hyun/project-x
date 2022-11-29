package com.web.projectX.signup;

import com.web.projectX.user.UserService;
import com.web.projectX.user.dto.UserAddDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@Controller
@RequiredArgsConstructor
public class SignupController {
    private final UserService userService;

    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }
    @PostMapping("/signup")
    public String signup(@Valid UserAddDto userAddDto)
    {
        userService.addUser(userAddDto);
        return "main";
    }
}
