package com.web.projectX.user;

import com.web.projectX.user.dto.UserAddDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void addUser(UserAddDto userAddDto) {
        User user = User.builder() //builder()로 시작
                    .userId(userAddDto.getUserId())
                    .name(userAddDto.getName())
                    .password(userAddDto.getPassword())
                    .email(userAddDto.getEmail())
                    .phone(userAddDto.getPhone())
                    .build(); //build()로 마무리
        userRepository.save(user);
    }
}
