package com.web.projectX.user.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.*;

@Getter
@Builder
public class UserAddDto {
    @Pattern(regexp="^[a-zA-Z0-9]{5,15}$")
    private String userId;
    @Pattern(regexp="^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$")
    private String password;
    @Size(min=1, max=20)
    @Pattern(regexp="^[a-zA-Z가-힣]+$")
    private String name;
    @Pattern(regexp="^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$")
    private String phone;
    @Pattern(regexp="^([a-zA-Z0-9]{4,20})@([a-z0-9]{1,255})[.]([a-z]{1,255})$")
    private String email;
}
