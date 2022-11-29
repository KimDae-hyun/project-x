package com.web.projectX.user;

import lombok.Builder;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity //테이블 생성  필드 타입 지정
@NoArgsConstructor // 기본 생성자 생성
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)// id(index)가 1씩 증가하게 해준다.
    private Integer id;
    @Column(name = "user_id", length = 15)
    private String userId;
    @NotNull
    @Column(columnDefinition ="char(32)")
    private String password;
    @NotNull
    @Column(columnDefinition ="char(20)")
    private String name;
    @NotNull
    @Column(columnDefinition ="char(20)")
    private String phone;
    @NotNull
    @Column(columnDefinition ="varchar(320)")
    private String email;

    @Builder
    public User(String userId, String password, String name, String phone, String email) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
